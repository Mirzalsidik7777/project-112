Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
});

    camera=document.getElementById('camera');
    Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/',modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}
function gotResult(error, results){
    if (error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = result[0].label;
        prediction_2 = result[1].label;
        speak();
        if(result[0].label == best){
            document.getElementById("update_emoji").innerHTML = "&#128077;"
        }
        if(result[0].label == victory){
            document.getElementById("update_emoji").innerHTML = "&#9996;"
        }
        if(result[0].label == amazing){
            document.getElementById("update_emoji").innerHTML = "&#128076;"
        }
    }
}
