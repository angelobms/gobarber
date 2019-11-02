export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'Equipe Gobarber <noreply@gobarber.com>',
  },
};

// Serviços de Email
// Amazon SES
// Mailgun
// Sparkpost
// Mandril (Mailchimp)
// Gmail - Não é legal usar por conta do limite

// Mailtrap (DEV) - apenas para ambiente de desenvolvimento
