
Webcam.set({
    crop_width:350,
    crop_height:300,
    image_format:"png",
    png_quality:100
})
Webcam.attach("#camera");
//data_uri : this stores the picture
function takepic(){
    Webcam.snap(function(data_uri){
        document.getElementById("camera").innerHTML = '<img id="selfie" src="'+data_uri+'">'
    });
}

model=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/TQ5nap_ci/model.json",modelLoaded);
function modelLoaded(){
    console.log("Teachable machine is linked");
}
//model.json is used so we only ask for the json not the who website
function identify(){
    img = document.getElementById("selfie");
    model.classify(img,showResult);
    

}
function showResult(error,result){
    if(error){
        console.log(error);
    }else{
        console.log(result);
        document.getElementById("object").innerHTML = "Object : " + result[0].label;
        accuracy = 100*result[0].confidence;
        accuracy = Math.floor(accuracy)
        document.getElementById("accuracy").innerHTML = "Accuracy : " + accuracy +" % ";
    } 
}
function camera(){
    Webcam.attach("#camera");
    document.getElementById("accuracy").innerHTML = "Accuracy : ";
    document.getElementById("object").innerHTML = "Object : ";

}