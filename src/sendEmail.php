<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: POST");
    header('Access-Control-Max-Age: 86400');
    header("Access-Control-Expose-Headers: Content-Length, X-JSON");
    header("Access-Control-Allow-Headers: *");
    
$data = file_get_contents('php://input');
$obj = json_decode($data);

$name = $obj->{'name'};
$email = $obj->{'email'};
$phone = $obj->{'phone'};
$message = $obj->{'message'};

$cabeceras = "From: $email\n"; //La persona que envia el correo
$cabeceras .='X-Mailer: PHP/' . phpversion();
$cabeceras .= "MIME-Version: 1.0\r\n";
$cabeceras .= "Content-type: text/html; charset=iso-8859-1\r\n";
$asunto = "Formulario Contacto"; //asunto aparecera en la bandeja del servidor de correo
$email_to = "contacto@bumerangdata.cl"; //cambiar por tu email
$mensaje = '
<html>
  <title>Formulario Contacto</title>
  <p>'.$name.' ha enviado un mensaje</p>
  <p>Nombre: '.$name.' <br></p>
  <p>Mail: '.$email.'<br></p>
  <p>Telefono: '.$phone.'<br></p>
  <p>Mensaje: '.$message.'<br></p>
</html>
';
//Enviamos el mensaje y comprobamos el resultado
if (@mail($email_to, $asunto ,$mensaje ,$cabeceras)) {
//Si el mensaje se envía muestra una confirmación
echo json_encode("Formulario enviado correctamente!");
}else
{
//Si el mensaje no se envía muestra el mensaje de error
echo json_encode("Error: Su información no pudo ser enviada, intente más tarde");
}
exit();
?>
