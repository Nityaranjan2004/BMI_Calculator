document.getElementById("bmiform").addEventListener('submit',function(e){
    e.preventDefault();

    const gender=document.getElementById('gender').value;
    const age=parseInt(document.getElementById("age").value);
    const heightfeet=parseInt(document.getElementById("height-feet").value);
    const heightinch=parseInt(document.getElementById("height-inches").value);
    const weight=parseFloat(document.getElementById("weight").value);
    

    if(gender && age && heightfeet && heightinch && weight){
        const heightInMeters=((heightfeet * 12) + heightinch)*0.0254; //height in meter
        const bmi =weight/(heightInMeters*heightInMeters);
        const resultElement=document.getElementById("result");
        let category="";

        if(bmi < 18.5){
            category=`Under weight`;
        }else if(bmi>=18.5 && bmi<24.9){
            category=`Normal weight`;
        }else if(bmi>=25 && bmi<29.9){
            category=`Over waight`;
        }else{
            category=`Obese`;
        }

        let resultMessage = `Your BMI: ${bmi.toFixed(2)}<br>`;
        resultMessage += `Category: ${category}`;
    resultElement.innerHTML=resultMessage;

    }

   
});

