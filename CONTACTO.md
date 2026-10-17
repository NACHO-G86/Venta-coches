# Envío del formulario de contacto

El formulario usa EmailJS y Gmail para enviar las consultas a `thenaxosgm@gmail.com`. La página ya tiene configurados el servicio, la plantilla y la clave pública de EmailJS. No se necesita un servidor propio.

El servicio de Gmail de EmailJS es `service_h3vbr01`. La plantilla `template_eeqp9pq` envía nombre, correo, teléfono y consulta a `thenaxosgm@gmail.com`; la respuesta al correo del usuario queda configurada como Reply To. El formulario muestra una confirmación si EmailJS acepta el envío y un error si lo rechaza.

En EmailJS, limita el dominio permitido a `nacho-g86.github.io` para reducir el uso no autorizado. La clave pública se usa en la web; no copies nunca la clave privada de EmailJS al código ni a GitHub. El formulario solicita consentimiento y entrega los datos a EmailJS para enviarlos por Gmail.
