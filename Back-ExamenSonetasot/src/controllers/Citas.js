
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports={
    index: async (req,res)=>{
        try {
            const users = await prisma.user.findMany({
              include: { citas: true },
            });
        
            return res.status(200).json(users);
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    },
    GetUser: async (req,res)=>{
        try {
            let user = await prisma.user.findUnique({  where: { CURP: req.params.CURP },
              include: { citas: true },
            });
        
            if (user) {
             return res.status(200).json(user);
            } else {
             return res.status(404).json({ error: 'Usuario no encontrado' });
            }
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
        },
    CreateDate:async (req,res)=>{
        const CURP=req.params.CURP
        const {fecha} = req.body;

        try {
          let user = await prisma.user.findUnique({ where: { CURP } });
      
          if (!user) {
            user = await prisma.user.create({ data: { CURP } });
          }      
          const cita = await prisma.citas.create({
            data: {
              fecha: new Date(fecha),
              userId: user.id,
            },
          });
      
         return res.status(200).json({ user, cita });
        } catch (error) {
            const fail = /Unique constraint failed on the fields: \(`fecha`,`userId`\)/;
            if(fail.test(error.message)){
                return res.status(400).json({ error: 'Solo puede tener un registro por fecha' });
            }
          res.status(500).json({ error: error.message });
        }
    },
    UpdateDate:async(req,res)=>{
        const {fecha} = req.body;
        
        try {
            let cita = await prisma.citas.findUnique({ where: { id: Number(req.params.id) } });
            if (!cita) {
              return res.status(400).json({ error: 'Hubo un Problema al encontrar la cita ' });
            }

          cita = await prisma.citas.update({
            where: { id: Number(req.params.id) },
            data: { fecha: new Date(fecha) },
          });
      
          return res.status(200).json({ cita });
        } catch (error) {
            const fail = /Unique constraint failed on the fields: \(`fecha`,`userId`\)/;
            if(fail.test(error.message)){
                return res.status(400).json({ error: 'Solo puede tener un registro por fecha' });
            }
          res.status(500).json({ error: error.message });
        }
    },
    DeleteDate:async (req,res)=>{     
        try {
            let cita = await prisma.citas.findUnique({ where: { id: Number(req.params.id) } });
            if (!cita) {
              return res.status(400).json({ error: 'Hubo un problema al encontrar la cita ' });
            }

            cita = await prisma.citas.delete({where: { id: Number(req.params.id) }});

            return res.status(200).json({ cita });
          
        } catch (error) {

            res.status(500).json({ error: error.message });
          }
    },
}