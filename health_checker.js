// =====================
// BP and Pulse Checker
// =====================
function checker() {
  const systolic = parseFloat(document.getElementById("syst").value);
  const diastolic = parseFloat(document.getElementById("diast").value);
  const pulse = parseInt(document.getElementById("pulse").value);
  const info = document.getElementById("bpinfo");

  // Reset styles
  info.className = "";
  info.innerText = "";

  // Validation
  if (isNaN(systolic) || isNaN(diastolic) || isNaN(pulse)) {
    info.innerText = "⚠️ Please fill in all fields.";
    info.className = "warning";
    return;
  }

  let message = "";
  let styleClass = "";

  // Blood Pressure Classification
  if (systolic < 90 || diastolic < 60) {
    message = "Hypotension ⚠️ (Possible dizziness, dehydration, or underlying condition)";
    styleClass = "warning";
  } 
  else if (systolic <= 120 && diastolic <= 80) {
    message = "Normal ✅ (Keep up a healthy lifestyle)";
    styleClass = "normal";
  } 
  else if ((systolic >= 121 && systolic <= 139) || (diastolic >= 81 && diastolic <= 89)) {
    message = "Elevated ⚠️ (Lifestyle changes advised)";
    styleClass = "warning";
  } 
  else if ((systolic >= 140 && systolic <= 180) || (diastolic >= 90 && diastolic <= 120)) {
    message = "Hypertension ⚠️ (Risk of heart disease & stroke, monitor closely)";
    styleClass = "danger";
  } 
  else if (systolic > 180 || diastolic > 120) {
    message = "Hypertensive Crisis ❌ (Seek medical attention immediately)";
    styleClass = "danger";
  }

  // Pulse Check
  if (pulse < 60) {
    message += "\nPulse: Low (Bradycardia - may cause dizziness/fatigue)";
  } else if (pulse >= 60 && pulse <= 100) {
    message += "\nPulse: Normal (Good range)";
  } else {
    message += "\nPulse: High (Tachycardia - could be stress, dehydration, or heart condition)";
  }

  info.innerText = message;
  info.className = styleClass;
}

function clearFields() {
  document.getElementById("syst").value = "";
  document.getElementById("diast").value = "";
  document.getElementById("pulse").value = "";
  const info = document.getElementById("bpinfo");
  info.innerText = "";
  info.className = "";
}


// =====================
// Blood Sugar Checker
// =====================
function sugarCheck() {
  const sugarInput = parseFloat(document.getElementById("sugar").value);
  const unit = document.getElementById("unit").value;
  const display = document.getElementById("sugarinfo");

  // Reset styles
  display.className = "";
  display.innerText = "";

  // Validation
  if (isNaN(sugarInput) || !unit) {
    display.innerText = "⚠️ Please fill in all the fields.";
    display.className = "warning";
    return;
  }

  // Convert mmol/L → mg/dL if needed
  let sugar = (unit === "mmol") ? sugarInput * 18 : sugarInput;

  let message = "";
  let styleClass = "";

  if (sugar < 54) {
    message = "Hypoglycemia ❌ Risks: coma, seizures, death. Seek emergency care immediately!";
    styleClass = "danger";
  } else if (sugar <= 69) {
    message = "Low blood sugar ⚠️ Risks: anxiety, sweating, shakiness. Take quick sugar, then a balanced meal. Check causes.";
    styleClass = "warning";
  } else if (sugar <= 99) {
    message = "Normal ✅";
    styleClass = "normal";
  } else if (sugar <= 125) {
    message = "Prediabetes risk ⚠️ Manage weight, exercise, adopt a plant-rich diet.";
    styleClass = "warning";
  } else if (sugar >= 126) {
    message = "Diabetes ❌ Requires long-term management to prevent complications.";
    styleClass = "danger";
  } else {    
    message = "Unexpected value. Please recheck input.";
    styleClass = "warning";
  }

  display.innerText = message;
  display.className = styleClass;
}

function clearSugar() {
  document.getElementById("sugar").value = "";
  document.getElementById("unit").value = "mgdl";
  const display = document.getElementById("sugarinfo");
  display.innerText = "";
  display.className = "";
}


// =====================
// BMI Checker
// =====================
function bmi(){
  const weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);
  const unit = document.getElementById("heightUnit").value; // cm or m
  const bminfo = document.getElementById("bminfo");

  // Reset
  bminfo.className = "";
  bminfo.innerText = "";

  // Validation
  if (isNaN(weight) || isNaN(height) || height <= 0) {
    bminfo.innerText = "⚠️ Please enter valid weight and height.";
    bminfo.className = "warning";
    return;
  }

  // Convert cm → m if needed
  if (unit === "cm") {
    height = height / 100;
  }

  // BMI calculation
  const BMI = weight / (height * height);

  let message = "";
  let styleClass = "";

  if (BMI < 16){
    message = "Severe Underweight ❌ Risk of malnutrition and weak immunity. Nutritional support needed.";
    styleClass = "danger";
  }
  else if (BMI <= 18.4){
    message = "Underweight ⚠️ Consider nutrient-dense foods and health checkup.";
    styleClass = "warning";
  }
  else if (BMI <= 24.9){
    message = "Normal ✅ Maintain healthy diet and exercise.";
    styleClass = "normal";
  }
  else if (BMI <= 29.9){
    message = "Overweight ⚠️ Increased risk of diabetes & heart disease. Lifestyle changes recommended.";
    styleClass = "warning";
  }
  else {
    message = "Obese ❌ High risk for chronic diseases. Seek medical & dietary advice.";
    styleClass = "danger";
  }

  bminfo.innerText = `BMI: ${BMI.toFixed(1)} → ${message}`;
  bminfo.className = styleClass;
}

function clearB() {
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  document.getElementById("heightUnit").value = "cm";
  const display = document.getElementById("bminfo");
  display.innerText = "";
  display.className = "";
}