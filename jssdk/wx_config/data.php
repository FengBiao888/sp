<?php
require_once "jssdk.php";
// $jssdk = new JSSDK("wxc787f71ffe896482", "aa166e1f71caae5a269852e79174e3bc");
$myurl = $_GET['myurl'];//拿到用户打开的url
$jssdk = new JSSDK("wxeecb0cb8435db26c", "99049d1cafe01c1caa2f787c8d8bad8e",$myurl);
$signPackage = $jssdk->GetSignPackage();
echo json_encode($signPackage,true);exit();
?>
