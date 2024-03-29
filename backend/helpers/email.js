import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
    const { email, nombre, token } = datos;

    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: "465",
        // secure: true,
        auth: {
            user: 'blacklukasf.8@gmail.com',
            pass: 'zolhwkuwqddlylct',
        },
    });

    // Información del email
    console.log(email)
    const info = await transport.sendMail({
        from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
        to: email,
        subject: "UpTask - Comprueba tu cuenta",
        text: "Comprueba tu cuenta en UpTask",
        html: `<p>Hola: ${nombre} Comprueba tu cuenta en UpTask</p>
    <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace: 
    <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>
    
    <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
    
    `,
    });
};

export const emailOlvidePassword = async (datos) => {
    const { email, nombre, token } = datos;

    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: "465",
        secure: true,
        auth: {
            user: 'blacklukasf.8@gmail.com',
            pass: 'zolhwkuwqddlylct',
        },
    });

    // Información del email

    const info = await transport.sendMail({
        from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
        to: email,
        subject: "UpTask - Reestablece tu Password",
        text: "Reestablece tu Password",
        html: `<p>Hola: ${nombre} has solicitado reestablecer tu password</p>
    <p>Sigue el siguiente enlace para generar un nuevo password: 
    <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a>
    
    <p>Si tu no solicitaste este email, puedes ignorar el mensaje</p>
    
    
    `,
    });
};