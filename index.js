 document.getElementById("mad_lib").addEventListener("click", buildMadLib);

 function buildMadLib() {
     var name = document.getElementById("person_name").value;
     var adverb = document.getElementById("adverb").value;
     var place = document.getElementById("place").value;
     var pronoun = document.getElementById("pronoun").value;
     var verb = document.getElementById("verb").value;
     var noun = document.getElementById("noun").value;
     var like = document.getElementById("like").value;
     let result = (name + " " + adverb + " " + "goes to" + " " + place + ", " + "In that place," + pronoun + " " + verb + " " + "how to" + noun + " " + like);
     alert(result)
 }