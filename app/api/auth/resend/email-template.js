// app/api/auth/resend/email-template.js (updated)
export function createVerificationEmail(url, host) {
  const escapedHost = host.replace(/\./g, '&#8203;.');

  return {
    subject: `Verifica tu email para Blindando Sueños`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <title>Verifica tu email - Blindando Sueños</title>
          <style>
            /* Your email styles here (keeping the same styles) */
          </style>
        </head>
        <body
          style="
            background-color: #f6f6f6;
            font-family: sans-serif;
            -webkit-font-smoothing: antialiased;
            font-size: 14px;
            line-height: 1.4;
            margin: 0;
            padding: 0;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
          "
        >
          <span
            class="preheader"
            style="
              color: transparent;
              display: none;
              height: 0;
              max-height: 0;
              max-width: 0;
              opacity: 0;
              overflow: hidden;
              mso-hide: all;
              visibility: hidden;
              width: 0;
            "
            >Verifica tu email para activar tu cuenta en Blindando Sueños</span
          >
          <table
            role="presentation"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="body"
            style="
              border-collapse: separate;
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              background-color: #f6f6f6;
              width: 100%;
            "
            width="100%"
            bgcolor="#f6f6f6"
          >
            <tr>
              <td
                style="font-family: sans-serif; font-size: 14px; vertical-align: top"
                valign="top"
              >
                &nbsp;
              </td>
              <td
                class="container"
                style="
                  font-family: sans-serif;
                  font-size: 14px;
                  vertical-align: top;
                  display: block;
                  max-width: 580px;
                  padding: 10px;
                  width: 580px;
                  margin: 0 auto;
                "
                width="580"
                valign="top"
              >
                <div
                  class="content"
                  style="
                    box-sizing: border-box;
                    display: block;
                    margin: 0 auto;
                    max-width: 580px;
                    padding: 10px;
                  "
                >
                  <!-- START CENTERED WHITE CONTAINER -->
                  <table
                    role="presentation"
                    class="main"
                    style="
                      border-collapse: separate;
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      background: #ffffff;
                      border-radius: 3px;
                      width: 100%;
                    "
                    width="100%"
                  >
                    <!-- START MAIN CONTENT AREA -->
                    <tr>
                      <td
                        class="wrapper"
                        style="
                          font-family: sans-serif;
                          font-size: 14px;
                          vertical-align: top;
                          box-sizing: border-box;
                          padding: 20px;
                        "
                        valign="top"
                      >
                        <table
                          role="presentation"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          style="
                            border-collapse: separate;
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            width: 100%;
                          "
                          width="100%"
                        >
                          <tr>
                            <td
                              style="
                                font-family: sans-serif;
                                font-size: 14px;
                                vertical-align: top;
                              "
                              valign="top"
                            >
                              <div style="text-align: center; margin-bottom: 25px;">
                                <img src="https://blindandosuenos.com/logo.png" alt="Blindando Sueños" width="80" style="max-width: 80px;">
                              </div>
                              <p
                                style="
                                  font-family: sans-serif;
                                  font-size: 14px;
                                  font-weight: normal;
                                  margin: 0;
                                  margin-bottom: 15px;
                                "
                              >
                                Hola,
                              </p>
                              <p
                                style="
                                  font-family: sans-serif;
                                  font-size: 14px;
                                  font-weight: normal;
                                  margin: 0;
                                  margin-bottom: 15px;
                                "
                              >
                                Gracias por registrarte en Blindando Sueños. Para completar tu registro, por favor verifica tu email haciendo clic en el botón a continuación:
                              </p>
                              <table
                                role="presentation"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                class="btn btn-primary"
                                style="
                                  border-collapse: separate;
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  box-sizing: border-box;
                                  width: 100%;
                                "
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      align="center"
                                      style="
                                        font-family: sans-serif;
                                        font-size: 14px;
                                        vertical-align: top;
                                        padding-bottom: 15px;
                                      "
                                      valign="top"
                                    >
                                      <table
                                        role="presentation"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        style="
                                          border-collapse: separate;
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          width: auto;
                                        "
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              style="
                                                font-family: sans-serif;
                                                font-size: 14px;
                                                vertical-align: top;
                                                border-radius: 5px;
                                                text-align: center;
                                                background-color: #FFC107;
                                              "
                                              valign="top"
                                              align="center"
                                              bgcolor="#FFC107"
                                            >
                                              
                                                href="${url}"
                                                target="_blank"
                                                style="
                                                  border: solid 1px #FFC107;
                                                  border-radius: 5px;
                                                  box-sizing: border-box;
                                                  cursor: pointer;
                                                  display: inline-block;
                                                  font-size: 14px;
                                                  font-weight: bold;
                                                  margin: 0;
                                                  padding: 12px 25px;
                                                  text-decoration: none;
                                                  text-transform: capitalize;
                                                  background-color: #FFC107;
                                                  border-color: #FFC107;
                                                  color: #ffffff;
                                                "
                                                >Verificar Email</a
                                              >
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p
                                style="
                                  font-family: sans-serif;
                                  font-size: 14px;
                                  font-weight: normal;
                                  margin: 0;
                                  margin-bottom: 15px;
                                "
                              >
                                Este enlace expirará en 24 horas.
                              </p>
                              <p
                                style="
                                  font-family: sans-serif;
                                  font-size: 14px;
                                  font-weight: normal;
                                  margin: 0;
                                  margin-bottom: 15px;
                                "
                              >
                                Si no has solicitado este registro, puedes ignorar este correo electrónico de forma segura.
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <!-- END MAIN CONTENT AREA -->
                  </table>
                  <!-- END CENTERED WHITE CONTAINER -->

                  <!-- START FOOTER -->
                  <div
                    class="footer"
                    style="
                      clear: both;
                      margin-top: 10px;
                      text-align: center;
                      width: 100%;
                    "
                  >
                    <table
                      role="presentation"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      style="
                        border-collapse: separate;
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        width: 100%;
                      "
                      width="100%"
                    >
                      <tr>
                        <td
                          class="content-block"
                          style="
                            font-family: sans-serif;
                            vertical-align: top;
                            padding-bottom: 10px;
                            padding-top: 10px;
                            color: #999999;
                            font-size: 12px;
                            text-align: center;
                          "
                          valign="top"
                          align="center"
                        >
                          <span
                            class="apple-link"
                            style="
                              color: #999999;
                              font-size: 12px;
                              text-align: center;
                            "
                            >Blindando Sueños, Colombia</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="content-block powered-by"
                          style="
                            font-family: sans-serif;
                            vertical-align: top;
                            padding-bottom: 10px;
                            padding-top: 10px;
                            color: #999999;
                            font-size: 12px;
                            text-align: center;
                          "
                          valign="top"
                          align="center"
                        >
                          © ${new Date().getFullYear()} Blindando Sueños. Todos los derechos reservados.
                        </td>
                      </tr>
                    </table>
                  </div>
                  <!-- END FOOTER -->
                </div>
              </td>
              <td
                style="font-family: sans-serif; font-size: 14px; vertical-align: top"
                valign="top"
              >
                &nbsp;
              </td>
            </tr>
          </table>
        </body>
      </html>
    `,
    text: `Verifica tu email para Blindando Sueños\n\nHola,\n\nGracias por registrarte en Blindando Sueños. Para completar tu registro, por favor verifica tu email con el siguiente enlace:\n${url}\n\nEste enlace expirará en 24 horas.\n\nSi no has solicitado este registro, puedes ignorar este correo electrónico de forma segura.\n\n© ${new Date().getFullYear()} Blindando Sueños. Todos los derechos reservados.`,
  };
}
