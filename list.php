<?php  
   header('Access-Control-Allow-Origin:*');  
   $json_string = file_get_contents('recommends.json');
   echo $json_string;exit();
       
  
 ?>    