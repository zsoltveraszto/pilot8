//var shuffleSequence = seq("intro", "sst1", rshuffle("sst", "ssf", "ssu", "ext", "exf", "exu"));
//var randomCode = Math.random().toString(36).substr(2,9);
//var completionCode = String("QUANT-" + randomCode);
//var completionMessage = "Thank you for your participation. The results were successfully transmitted. Your participation code is: "+ completionCode;
var shuffleSequence=seq("setcounter","consent","intro","intro1p5","intro2","practiceb1","fullexperimentmessage","practiceb2","practiceb3","realexperiment",rshuffle(startsWith("quan"),startsWith("filler")),"exit");
//var shuffleSequence = seq("practicea1","exit");
//var shuffleSequence = seq("practiceb1",rshuffle(startsWith("quant")));

//var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: "keypress",
        normalMessage: "Press the space bar to continue.",
        errorMessage: "Wrong. Please wait for the next sentence."
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(Bad)", rightComment: "(Good)"
    },
    "Question", {
        hasCorrect: true
    },
//    "Message", {
//        hideProgressBar: true
//    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true,
        countsForProgressBar: true,
      //  continueMessage: "Press return to continue."
    },
    "Vraag", {
        as: [["1", "1. Good"], ["0", "0. Not good"]],
        presentAsScale: true,
        showNumbers: false,
        //leftComment: "Good",
        //rightComment: "Not good",
    },
    "Zin", {
        hideProgressBar: true,
        mode: "self-paced reading",
        display: "in place",
        blankText: "(Press the space bar to continue.)",
   },
    "VraagX", {
      hideProgressBar: true
    },
    "Message", {
      hideProgressBar: true,
      transfer: "keypress"
    }];

var Blanka=blank("_________________________________________________________________")
var annequestion1="<p>Anne: ____________________?</p>"
var taskquestion="<p><i>What do you think Anne's question was?</i></p>"
var items = [
    ["sep", "Separator", { }],
    ["consent", "Form", {consentRequired: true, html: { include: "intro.html" }, validators: {},continueMessage:"Click here to continue."} ],
    ["intro", "Form", {html: { include: "example_intro0.html" }, validators: {},continueMessage:"Click here to continue."} ],
    ["intro1p5", "Form", {html: { include: "example_intro02.html" }, validators: {},continueMessage:"Click here to continue."} ],
    ["intro2", "Form", {html: { include: "example_intro1.html" }, validators: {},continueMessage:"Click here to continue."} ],
//    ["ainstructions", "Form", {html: { include: "example_intro1.html" },validators: {},continueMessage:"Click here to continue."} ],
//    ["binstructions", "Form", {html: { include: "example_intro2.html" },validators: {} ,continueMessage:"Click here to continue."}],
     ["realexperiment", "Form", {html: { include: "example_intro3.html" },validators: {},continueMessage:"Click here to continue."} ],
    ["exit", "Form", {html: { include: "exit.html" },validators: {},continueMessage:"Click here to continue."} ],
//
//
//["practicea1","Form", {html:"<p>Remember Ann can't see the picture, but Bob can. So Ann is asking Bob a question about the picture.</p>"+annequestion1+ "<p>Bob: There are more stars than moons.</p>"+ "<p><i>What do you think Anne's question was?</i> (Keep this question in mind because you’ll use it later!)</p>"+ Blanka.html, validators:Blanka.validators}],
["fullexperimentmessage", "Form", {html: {include: "fullexperimentmessage.html"},continueMessage:"Click here to continue."}],
//["practicefull1","Form", {html:"<p>Remember Ann can't see the picture, but Bob can. So Ann is asking Bob a question about the picture.</p>"+annequestion1+ "<p>Bob: There are two types of shapes. </p>"+ taskquestion+ Blanka.html,validators:Blanka.validators}, "VraagX", {html:{ include: "practicefull1.html" }}],
//["practicefull2","Form", {html:"<p>Remember Ann can't see the picture, but Bob can. So Ann is asking Bob a question about the picture.</p>"+annequestion1+ "<p>Bob: Moons are yellow and stars are blue.</p>"+ taskquestion+ Blanka.html,validators:Blanka.validators}, "VraagX", {html:{ include: "practicefull2.html" }}],
//
["practiceb1", "Message", {html: "<p>Read Anne’s question, and keep it in mind for the next screen.</p><p>Anne: How many moons are there?</p><p>On the next screen, you will see Bob’s answer, and the picture Anne and Bob were talking about. <b>Given Anne’s question, do you think Bob’s answer is a good description of the picture? Remember Anne can't see the pictures.</b> Press 1 for “good description” and 0 for “not good”.</p><p><i>Press any key to continue.</i></p>"}, "VraagX", {html:{ include: "practiceb1.html" }}],
["practiceb2", "Message", {html: "<p>Anne: How many shapes are there?</p><p><i>Press any key to continue.</i></p>"}, "VraagX", {html:{ include: "practicefull1.html" }}],
["practiceb3", "Message", {html: "<p>Anne: What colors are moons and stars?</p><p><i>Press any key to continue.</i></p>"}, "VraagX", {html:{ include: "practicefull2.html" }}],

[["quan.tr.wh",1], "Message", {html: "<p>Anne: What color are the shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_1.html" }}],
[["quan.fa.wh",1], "Message", {html: "<p>Anne: What color are the shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_1.html" }}],
[["quan.ta.wh",1], "Message", {html: "<p>Anne: What color are the shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_1.html" }}],
[["quan.tr.wh",2], "Message", {html: "<p>Anne: Which shape is green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_2.html" }}],
[["quan.fa.wh",2], "Message", {html: "<p>Anne: Which shape is green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_2.html" }}],
[["quan.ta.wh",2], "Message", {html: "<p>Anne: Which shape is green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_2.html" }}],
[["quan.tr.wh",3], "Message", {html: "<p>Anne: What color are the shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_3.html" }}],
[["quan.fa.wh",3], "Message", {html: "<p>Anne: What color are the shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_3.html" }}],
[["quan.ta.wh",3], "Message", {html: "<p>Anne: What color are the shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_3.html" }}],
[["quan.tr.wh",4], "Message", {html: "<p>Anne: What shape is green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_4.html" }}],
[["quan.fa.wh",4], "Message", {html: "<p>Anne: What shape is green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_4.html" }}],
[["quan.ta.wh",4], "Message", {html: "<p>Anne: What shape is green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_4.html" }}],
[["quan.tr.wh",5], "Message", {html: "<p>Anne: What color are the shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_5.html" }}],
[["quan.fa.wh",5], "Message", {html: "<p>Anne: What color are the shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_5.html" }}],
[["quan.ta.wh",5], "Message", {html: "<p>Anne: What color are the shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_5.html" }}],
[["quan.tr.wh",6], "Message", {html: "<p>Anne: What shape is yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_6.html" }}],
[["quan.fa.wh",6], "Message", {html: "<p>Anne: What shape is yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_6.html" }}],
[["quan.ta.wh",6], "Message", {html: "<p>Anne: What shape is yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_6.html" }}],
[["quan.tr.wh",7], "Message", {html: "<p>Anne: What color are the shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_7.html" }}],
[["quan.fa.wh",7], "Message", {html: "<p>Anne: What color are the shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_7.html" }}],
[["quan.ta.wh",7], "Message", {html: "<p>Anne: What color are the shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_7.html" }}],
[["quan.tr.wh",8], "Message", {html: "<p>Anne: What shape is red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_8.html" }}],
[["quan.fa.wh",8], "Message", {html: "<p>Anne: What shape is red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_8.html" }}],
[["quan.ta.wh",8], "Message", {html: "<p>Anne: What shape is red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_8.html" }}],
[["quan.tr.wh",9], "Message", {html: "<p>Anne: What color are the triangles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_9.html" }}],
[["quan.fa.wh",9], "Message", {html: "<p>Anne: What color are the triangles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_9.html" }}],
[["quan.ta.wh",9], "Message", {html: "<p>Anne: What color are the triangles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_9.html" }}],
[["quan.tr.wh",10], "Message", {html: "<p>Anne: Which shape is blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_10.html" }}],
[["quan.fa.wh",10], "Message", {html: "<p>Anne: Which shape is blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_10.html" }}],
[["quan.ta.wh",10], "Message", {html: "<p>Anne: Which shape is blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_10.html" }}],
[["quan.tr.wh",11], "Message", {html: "<p>Anne: What color are the triangles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_11.html" }}],
[["quan.fa.wh",11], "Message", {html: "<p>Anne: What color are the triangles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_11.html" }}],
[["quan.ta.wh",11], "Message", {html: "<p>Anne: What color are the triangles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_11.html" }}],
[["quan.tr.wh",12], "Message", {html: "<p>Anne: Which shape is red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_12.html" }}],
[["quan.fa.wh",12], "Message", {html: "<p>Anne: Which shape is red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_12.html" }}],
[["quan.ta.wh",12], "Message", {html: "<p>Anne: Which shape is red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_12.html" }}],
[["quan.tr.wh",13], "Message", {html: "<p>Anne: What color are the triangles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_13.html" }}],
[["quan.fa.wh",13], "Message", {html: "<p>Anne: What color are the triangles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_13.html" }}],
[["quan.ta.wh",13], "Message", {html: "<p>Anne: What color are the triangles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_13.html" }}],
[["quan.tr.wh",14], "Message", {html: "<p>Anne: Which shape is blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_14.html" }}],
[["quan.fa.wh",14], "Message", {html: "<p>Anne: Which shape is blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_14.html" }}],
[["quan.ta.wh",14], "Message", {html: "<p>Anne: Which shape is blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_14.html" }}],
[["quan.tr.wh",15], "Message", {html: "<p>Anne: What color are the circles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_15.html" }}],
[["quan.fa.wh",15], "Message", {html: "<p>Anne: What color are the circles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_15.html" }}],
[["quan.ta.wh",15], "Message", {html: "<p>Anne: What color are the circles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_15.html" }}],
[["quan.tr.wh",16], "Message", {html: "<p>Anne: Which shape is yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_16.html" }}],
[["quan.fa.wh",16], "Message", {html: "<p>Anne: Which shape is yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_16.html" }}],
[["quan.ta.wh",16], "Message", {html: "<p>Anne: Which shape is yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_16.html" }}],
[["quan.tr.wh",17], "Message", {html: "<p>Anne: What color are the circles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_17.html" }}],
[["quan.fa.wh",17], "Message", {html: "<p>Anne: What color are the circles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_17.html" }}],
[["quan.ta.wh",17], "Message", {html: "<p>Anne: What color are the circles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_17.html" }}],
[["quan.tr.wh",18], "Message", {html: "<p>Anne: Which shape is black?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_18.html" }}],
[["quan.fa.wh",18], "Message", {html: "<p>Anne: Which shape is black?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_18.html" }}],
[["quan.ta.wh",18], "Message", {html: "<p>Anne: Which shape is black?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_18.html" }}],
[["quan.tr.wh",19], "Message", {html: "<p>Anne: What color are the squares?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_19.html" }}],
[["quan.fa.wh",19], "Message", {html: "<p>Anne: What color are the squares?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_19.html" }}],
[["quan.ta.wh",19], "Message", {html: "<p>Anne: What color are the squares?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_19.html" }}],
[["quan.tr.wh",20], "Message", {html: "<p>Anne: What shape is orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_20.html" }}],
[["quan.fa.wh",20], "Message", {html: "<p>Anne: What shape is orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_20.html" }}],
[["quan.ta.wh",20], "Message", {html: "<p>Anne: What shape is orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_20.html" }}],
[["quan.tr.wh",21], "Message", {html: "<p>Anne: What color are the squares?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_21.html" }}],
[["quan.fa.wh",21], "Message", {html: "<p>Anne: What color are the squares?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_21.html" }}],
[["quan.ta.wh",21], "Message", {html: "<p>Anne: What color are the squares?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_21.html" }}],
[["quan.tr.wh",22], "Message", {html: "<p>Anne: What shape is orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_22.html" }}],
[["quan.fa.wh",22], "Message", {html: "<p>Anne: What shape is orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_22.html" }}],
[["quan.ta.wh",22], "Message", {html: "<p>Anne: What shape is orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_22.html" }}],
[["quan.tr.wh",23], "Message", {html: "<p>Anne: What color are the squares?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_23.html" }}],
[["quan.fa.wh",23], "Message", {html: "<p>Anne: What color are the squares?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_23.html" }}],
[["quan.ta.wh",23], "Message", {html: "<p>Anne: What color are the squares?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_23.html" }}],
[["quan.tr.wh",24], "Message", {html: "<p>Anne: What shape is black?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_24.html" }}],
[["quan.fa.wh",24], "Message", {html: "<p>Anne: What shape is black?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_24.html" }}],
[["quan.ta.wh",24], "Message", {html: "<p>Anne: What shape is black?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_24.html" }}],
["filler.good.", "Message", {html: "<p>Anne: Are there more hearts than circles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "filler_good_1.html" }}],
["filler.good.", "Message", {html: "<p>Anne: Are there more stars than moons?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "filler_good_2.html" }}],
["filler.bad.", "Message", {html: "<p>Anne: Are there more diamonds than hearts?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "filler_bad_3.html" }}],
["filler.good.", "Message", {html: "<p>Anne: Are the shapes different from each other?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "filler_good_4.html" }}],
["filler.bad.", "Message", {html: "<p>Anne: Are there different shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "filler_bad_5.html" }}],
["filler.bad.", "Message", {html: "<p>Anne: Are the shapes the same?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "filler_bad_6.html" }}],
["filler.good.", "Message", {html: "<p>Anne: Where is the heart?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "filler_good_7.html" }}],
["filler.good.", "Message", {html: "<p>Anne: Where is the diamond?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "filler_good_8.html" }}],
["filler.bad.", "Message", {html: "<p>Anne: Is the triangle below the moon?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "filler_bad_9.html" }}],
["filler.good.", "Message", {html: "<p>Anne: Is the star next to the diamond?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "filler_good_10.html" }}],
["filler.bad.", "Message", {html: "<p>Anne: Where is the moon?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "filler_bad_11.html" }}],
["filler.bad.", "Message", {html: "<p>Anne: Are there fewer hearts than stars?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "filler_bad_12.html" }}],

];



function blank(a, b) {
   var sentence = b ? b : a;
   var n = b ? a : null;

   var seq = [""];
   var inBlank = false;
   for (var i = 0; i < sentence.length; ++i) {
       var c = sentence.charAt(i)
       if (inBlank) {
           if (c == '_')
               (seq[seq.length-1])++;
           else {
               seq.push(c);
               inBlank = true;
           }
       }
       else {
           if (c != '_')
               seq[seq.length-1] += c
           else {
               seq.push(1);
               inBlank = true;
           }
       }
   }

   var ihtml = "";
   var bcount = 0;
   for (var i = 0; i < seq.length; ++i) {
       if (typeof(seq[i]) == "number") {
           ++bcount;
           var input = " <input type='text' name='blank-" + bcount + "' size='" + (n ? n : seq[i]) + "'></input> ";
           ihtml += input;
       }
       else {
           ihtml += $("<div>").text(seq[i])[0].innerHTML;
       }
   }

   var e = "<p>";
   var validators = { };
   var bcount = 0;
   for (var i = 0; i < seq.length; ++i) {
       if (typeof(seq[i]) == "number") {
           ++bcount;
           e += "<label class='error' for='blank-" + bcount + "'></label>";
           validators['blank-' + bcount] = function (s) { if (s && ! s.match(/^\s*$/)) return true; else return "You must fill in the blank."; }
       }
   }
   e += "</p>"

   return {
       html: "<p>" + ihtml+ "</p>" + e,
       validators: validators
   };
   //return "<p>" + ihtml+ "</p>" + e
}
