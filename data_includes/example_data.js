//var shuffleSequence = seq("intro", "sst1", rshuffle("sst", "ssf", "ssu", "ext", "exf", "exu"));
//var randomCode = Math.random().toString(36).substr(2,9);
//var completionCode = String("QUANT-" + randomCode);
//var completionMessage = "Thank you for your participation. The results were successfully transmitted. Your participation code is: "+ completionCode;
var shuffleSequence =seq("setcounter","consent","intro","intro2","practiceb1","fullexperimentmessage","practiceb2","practiceb3","realexperiment",rshuffle(startsWith("quan")),"exit");
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
[["quan.tr.an",1], "Message", {html: "<p>Anne: Are all shapes red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_1.html" }}],
[["quan.tr.al",1], "Message", {html: "<p>Anne: Are any shapes red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_1.html" }}],
[["quan.fa.wh",1], "Message", {html: "<p>Anne: What color are the shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_1.html" }}],
[["quan.fa.an",1], "Message", {html: "<p>Anne: Are all shapes red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_1.html" }}],
[["quan.fa.al",1], "Message", {html: "<p>Anne: Are any shapes red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_1.html" }}],
[["quan.ta.wh",1], "Message", {html: "<p>Anne: What color are the shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_1.html" }}],
[["quan.ta.an",1], "Message", {html: "<p>Anne: Are all shapes red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_1.html" }}],
[["quan.ta.al",1], "Message", {html: "<p>Anne: Are any shapes red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_1.html" }}],
[["quan.tr.wh",2], "Message", {html: "<p>Anne: Which shape is green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_2.html" }}],
[["quan.tr.an",2], "Message", {html: "<p>Anne: Are there any green shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_2.html" }}],
[["quan.tr.al",2], "Message", {html: "<p>Anne: Are both shapes green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_2.html" }}],
[["quan.fa.wh",2], "Message", {html: "<p>Anne: Which shape is green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_2.html" }}],
[["quan.fa.an",2], "Message", {html: "<p>Anne: Are there any green shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_2.html" }}],
[["quan.fa.al",2], "Message", {html: "<p>Anne: Are both shapes green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_2.html" }}],
[["quan.ta.wh",2], "Message", {html: "<p>Anne: Which shape is green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_2.html" }}],
[["quan.ta.an",2], "Message", {html: "<p>Anne: Are there any green shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_2.html" }}],
[["quan.ta.al",2], "Message", {html: "<p>Anne: Are both shapes green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_2.html" }}],
[["quan.tr.wh",3], "Message", {html: "<p>Anne: What color are the shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_3.html" }}],
[["quan.tr.an",3], "Message", {html: "<p>Anne: Are all shapes green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_3.html" }}],
[["quan.tr.al",3], "Message", {html: "<p>Anne: Are any shapes green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_3.html" }}],
[["quan.fa.wh",3], "Message", {html: "<p>Anne: What color are the shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_3.html" }}],
[["quan.fa.an",3], "Message", {html: "<p>Anne: Are all shapes green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_3.html" }}],
[["quan.fa.al",3], "Message", {html: "<p>Anne: Are any shapes green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_3.html" }}],
[["quan.ta.wh",3], "Message", {html: "<p>Anne: What color are the shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_3.html" }}],
[["quan.ta.an",3], "Message", {html: "<p>Anne: Are all shapes green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_3.html" }}],
[["quan.ta.al",3], "Message", {html: "<p>Anne: Are any shapes green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_3.html" }}],
[["quan.tr.wh",4], "Message", {html: "<p>Anne: What shape is green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_4.html" }}],
[["quan.tr.an",4], "Message", {html: "<p>Anne: Are there any green shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_4.html" }}],
[["quan.tr.al",4], "Message", {html: "<p>Anne: Are both shapes green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_4.html" }}],
[["quan.fa.wh",4], "Message", {html: "<p>Anne: What shape is green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_4.html" }}],
[["quan.fa.an",4], "Message", {html: "<p>Anne: Are there any green shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_4.html" }}],
[["quan.fa.al",4], "Message", {html: "<p>Anne: Are both shapes green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_4.html" }}],
[["quan.ta.wh",4], "Message", {html: "<p>Anne: What shape is green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_4.html" }}],
[["quan.ta.an",4], "Message", {html: "<p>Anne: Are there any green shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_4.html" }}],
[["quan.ta.al",4], "Message", {html: "<p>Anne: Are both shapes green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_4.html" }}],
[["quan.tr.wh",5], "Message", {html: "<p>Anne: What color are the shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_5.html" }}],
[["quan.tr.an",5], "Message", {html: "<p>Anne: Are all shapes blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_5.html" }}],
[["quan.tr.al",5], "Message", {html: "<p>Anne: Are there any blue shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_5.html" }}],
[["quan.fa.wh",5], "Message", {html: "<p>Anne: What color are the shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_5.html" }}],
[["quan.fa.an",5], "Message", {html: "<p>Anne: Are all shapes blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_5.html" }}],
[["quan.fa.al",5], "Message", {html: "<p>Anne: Are there any blue shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_5.html" }}],
[["quan.ta.wh",5], "Message", {html: "<p>Anne: What color are the shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_5.html" }}],
[["quan.ta.an",5], "Message", {html: "<p>Anne: Are all shapes blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_5.html" }}],
[["quan.ta.al",5], "Message", {html: "<p>Anne: Are there any blue shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_5.html" }}],
[["quan.tr.wh",6], "Message", {html: "<p>Anne: What shape is yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_6.html" }}],
[["quan.tr.an",6], "Message", {html: "<p>Anne: Are there any yellow shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_6.html" }}],
[["quan.tr.al",6], "Message", {html: "<p>Anne: Are both shapes yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_6.html" }}],
[["quan.fa.wh",6], "Message", {html: "<p>Anne: What shape is yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_6.html" }}],
[["quan.fa.an",6], "Message", {html: "<p>Anne: Are there any yellow shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_6.html" }}],
[["quan.fa.al",6], "Message", {html: "<p>Anne: Are both shapes yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_6.html" }}],
[["quan.ta.wh",6], "Message", {html: "<p>Anne: What shape is yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_6.html" }}],
[["quan.ta.an",6], "Message", {html: "<p>Anne: Are there any yellow shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_6.html" }}],
[["quan.ta.al",6], "Message", {html: "<p>Anne: Are both shapes yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_6.html" }}],
[["quan.tr.wh",7], "Message", {html: "<p>Anne: What color are the shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_7.html" }}],
[["quan.tr.an",7], "Message", {html: "<p>Anne: Are all shapes yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_7.html" }}],
[["quan.tr.al",7], "Message", {html: "<p>Anne: Are there any yellow shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_7.html" }}],
[["quan.fa.wh",7], "Message", {html: "<p>Anne: What color are the shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_7.html" }}],
[["quan.fa.an",7], "Message", {html: "<p>Anne: Are all shapes yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_7.html" }}],
[["quan.fa.al",7], "Message", {html: "<p>Anne: Are there any yellow shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_7.html" }}],
[["quan.ta.wh",7], "Message", {html: "<p>Anne: What color are the shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_7.html" }}],
[["quan.ta.an",7], "Message", {html: "<p>Anne: Are all shapes yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_7.html" }}],
[["quan.ta.al",7], "Message", {html: "<p>Anne: Are there any yellow shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_7.html" }}],
[["quan.tr.wh",8], "Message", {html: "<p>Anne: What shape is red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_8.html" }}],
[["quan.tr.an",8], "Message", {html: "<p>Anne: Are there any red shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_8.html" }}],
[["quan.tr.al",8], "Message", {html: "<p>Anne: Are both shapes red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_8.html" }}],
[["quan.fa.wh",8], "Message", {html: "<p>Anne: What shape is red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_8.html" }}],
[["quan.fa.an",8], "Message", {html: "<p>Anne: Are there any red shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_8.html" }}],
[["quan.fa.al",8], "Message", {html: "<p>Anne: Are both shapes red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_8.html" }}],
[["quan.ta.wh",8], "Message", {html: "<p>Anne: What shape is red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_8.html" }}],
[["quan.ta.an",8], "Message", {html: "<p>Anne: Are there any red shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_8.html" }}],
[["quan.ta.al",8], "Message", {html: "<p>Anne: Are both shapes red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_8.html" }}],
[["quan.tr.wh",9], "Message", {html: "<p>Anne: What color are the triangles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_9.html" }}],
[["quan.tr.an",9], "Message", {html: "<p>Anne: Are all triangles red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_9.html" }}],
[["quan.tr.al",9], "Message", {html: "<p>Anne: Are any triangles red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_9.html" }}],
[["quan.fa.wh",9], "Message", {html: "<p>Anne: What color are the triangles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_9.html" }}],
[["quan.fa.an",9], "Message", {html: "<p>Anne: Are all triangles red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_9.html" }}],
[["quan.fa.al",9], "Message", {html: "<p>Anne: Are any triangles red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_9.html" }}],
[["quan.ta.wh",9], "Message", {html: "<p>Anne: What color are the triangles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_9.html" }}],
[["quan.ta.an",9], "Message", {html: "<p>Anne: Are all triangles red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_9.html" }}],
[["quan.ta.al",9], "Message", {html: "<p>Anne: Are any triangles red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_9.html" }}],
[["quan.tr.wh",10], "Message", {html: "<p>Anne: Which shape is blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_10.html" }}],
[["quan.tr.an",10], "Message", {html: "<p>Anne: Are there any blue shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_10.html" }}],
[["quan.tr.al",10], "Message", {html: "<p>Anne: Are both shapes blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_10.html" }}],
[["quan.fa.wh",10], "Message", {html: "<p>Anne: Which shape is blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_10.html" }}],
[["quan.fa.an",10], "Message", {html: "<p>Anne: Are there any blue shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_10.html" }}],
[["quan.fa.al",10], "Message", {html: "<p>Anne: Are both shapes blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_10.html" }}],
[["quan.ta.wh",10], "Message", {html: "<p>Anne: Which shape is blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_10.html" }}],
[["quan.ta.an",10], "Message", {html: "<p>Anne: Are there any blue shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_10.html" }}],
[["quan.ta.al",10], "Message", {html: "<p>Anne: Are both shapes blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_10.html" }}],
[["quan.tr.wh",11], "Message", {html: "<p>Anne: What color are the triangles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_11.html" }}],
[["quan.tr.an",11], "Message", {html: "<p>Anne: Are all triangles green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_11.html" }}],
[["quan.tr.al",11], "Message", {html: "<p>Anne: Are any triangles green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_11.html" }}],
[["quan.fa.wh",11], "Message", {html: "<p>Anne: What color are the triangles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_11.html" }}],
[["quan.fa.an",11], "Message", {html: "<p>Anne: Are all triangles green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_11.html" }}],
[["quan.fa.al",11], "Message", {html: "<p>Anne: Are any triangles green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_11.html" }}],
[["quan.ta.wh",11], "Message", {html: "<p>Anne: What color are the triangles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_11.html" }}],
[["quan.ta.an",11], "Message", {html: "<p>Anne: Are all triangles green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_11.html" }}],
[["quan.ta.al",11], "Message", {html: "<p>Anne: Are any triangles green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_11.html" }}],
[["quan.tr.wh",12], "Message", {html: "<p>Anne: Which shape is yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_12.html" }}],
[["quan.tr.an",12], "Message", {html: "<p>Anne: Are there any yellow shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_12.html" }}],
[["quan.tr.al",12], "Message", {html: "<p>Anne: Are both shapes yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_12.html" }}],
[["quan.fa.wh",12], "Message", {html: "<p>Anne: Which shape is yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_12.html" }}],
[["quan.fa.an",12], "Message", {html: "<p>Anne: Are there any yellow shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_12.html" }}],
[["quan.fa.al",12], "Message", {html: "<p>Anne: Are both shapes yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_12.html" }}],
[["quan.ta.wh",12], "Message", {html: "<p>Anne: Which shape is yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_12.html" }}],
[["quan.ta.an",12], "Message", {html: "<p>Anne: Are there any yellow shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_12.html" }}],
[["quan.ta.al",12], "Message", {html: "<p>Anne: Are both shapes yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_12.html" }}],
[["quan.tr.wh",13], "Message", {html: "<p>Anne: What color are the triangles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_13.html" }}],
[["quan.tr.an",13], "Message", {html: "<p>Anne: Are all triangles black?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_13.html" }}],
[["quan.tr.al",13], "Message", {html: "<p>Anne: Are there any black triangles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_13.html" }}],
[["quan.fa.wh",13], "Message", {html: "<p>Anne: What color are the triangles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_13.html" }}],
[["quan.fa.an",13], "Message", {html: "<p>Anne: Are all triangles black?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_13.html" }}],
[["quan.fa.al",13], "Message", {html: "<p>Anne: Are there any black triangles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_13.html" }}],
[["quan.ta.wh",13], "Message", {html: "<p>Anne: What color are the triangles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_13.html" }}],
[["quan.ta.an",13], "Message", {html: "<p>Anne: Are all triangles black?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_13.html" }}],
[["quan.ta.al",13], "Message", {html: "<p>Anne: Are there any black triangles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_13.html" }}],
[["quan.tr.wh",14], "Message", {html: "<p>Anne: Which shape is red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_14.html" }}],
[["quan.tr.an",14], "Message", {html: "<p>Anne: Are there any red shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_14.html" }}],
[["quan.tr.al",14], "Message", {html: "<p>Anne: Are both shapes red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_14.html" }}],
[["quan.fa.wh",14], "Message", {html: "<p>Anne: Which shape is red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_14.html" }}],
[["quan.fa.an",14], "Message", {html: "<p>Anne: Are there any red shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_14.html" }}],
[["quan.fa.al",14], "Message", {html: "<p>Anne: Are both shapes red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_14.html" }}],
[["quan.ta.wh",14], "Message", {html: "<p>Anne: Which shape is red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_14.html" }}],
[["quan.ta.an",14], "Message", {html: "<p>Anne: Are there any red shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_14.html" }}],
[["quan.ta.al",14], "Message", {html: "<p>Anne: Are both shapes red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_14.html" }}],
[["quan.tr.wh",15], "Message", {html: "<p>Anne: What color are the triangles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_15.html" }}],
[["quan.tr.an",15], "Message", {html: "<p>Anne: Are all triangles orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_15.html" }}],
[["quan.tr.al",15], "Message", {html: "<p>Anne: Are there any orange triangles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_15.html" }}],
[["quan.fa.wh",15], "Message", {html: "<p>Anne: What color are the triangles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_15.html" }}],
[["quan.fa.an",15], "Message", {html: "<p>Anne: Are all triangles orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_15.html" }}],
[["quan.fa.al",15], "Message", {html: "<p>Anne: Are there any orange triangles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_15.html" }}],
[["quan.ta.wh",15], "Message", {html: "<p>Anne: What color are the triangles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_15.html" }}],
[["quan.ta.an",15], "Message", {html: "<p>Anne: Are all triangles orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_15.html" }}],
[["quan.ta.al",15], "Message", {html: "<p>Anne: Are there any orange triangles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_15.html" }}],
[["quan.tr.wh",16], "Message", {html: "<p>Anne: What shape is blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_16.html" }}],
[["quan.tr.an",16], "Message", {html: "<p>Anne: Are there any blue shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_16.html" }}],
[["quan.tr.al",16], "Message", {html: "<p>Anne: Are both shapes blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_16.html" }}],
[["quan.fa.wh",16], "Message", {html: "<p>Anne: What shape is blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_16.html" }}],
[["quan.fa.an",16], "Message", {html: "<p>Anne: Are there any blue shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_16.html" }}],
[["quan.fa.al",16], "Message", {html: "<p>Anne: Are both shapes blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_16.html" }}],
[["quan.ta.wh",16], "Message", {html: "<p>Anne: What shape is blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_16.html" }}],
[["quan.ta.an",16], "Message", {html: "<p>Anne: Are there any blue shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_16.html" }}],
[["quan.ta.al",16], "Message", {html: "<p>Anne: Are both shapes blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_16.html" }}],
[["quan.tr.wh",17], "Message", {html: "<p>Anne: What color are the circles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_17.html" }}],
[["quan.tr.an",17], "Message", {html: "<p>Anne: Are all circles blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_17.html" }}],
[["quan.tr.al",17], "Message", {html: "<p>Anne: Are any circles blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_17.html" }}],
[["quan.fa.wh",17], "Message", {html: "<p>Anne: What color are the circles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_17.html" }}],
[["quan.fa.an",17], "Message", {html: "<p>Anne: Are all circles blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_17.html" }}],
[["quan.fa.al",17], "Message", {html: "<p>Anne: Are any circles blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_17.html" }}],
[["quan.ta.wh",17], "Message", {html: "<p>Anne: What color are the circles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_17.html" }}],
[["quan.ta.an",17], "Message", {html: "<p>Anne: Are all circles blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_17.html" }}],
[["quan.ta.al",17], "Message", {html: "<p>Anne: Are any circles blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_17.html" }}],
[["quan.tr.wh",18], "Message", {html: "<p>Anne: What shape is green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_18.html" }}],
[["quan.tr.an",18], "Message", {html: "<p>Anne: Are there any green shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_18.html" }}],
[["quan.tr.al",18], "Message", {html: "<p>Anne: Are both shapes green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_18.html" }}],
[["quan.fa.wh",18], "Message", {html: "<p>Anne: What shape is green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_18.html" }}],
[["quan.fa.an",18], "Message", {html: "<p>Anne: Are there any green shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_18.html" }}],
[["quan.fa.al",18], "Message", {html: "<p>Anne: Are both shapes green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_18.html" }}],
[["quan.ta.wh",18], "Message", {html: "<p>Anne: What shape is green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_18.html" }}],
[["quan.ta.an",18], "Message", {html: "<p>Anne: Are there any green shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_18.html" }}],
[["quan.ta.al",18], "Message", {html: "<p>Anne: Are both shapes green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_18.html" }}],
[["quan.tr.wh",19], "Message", {html: "<p>Anne: What color are the circles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_19.html" }}],
[["quan.tr.an",19], "Message", {html: "<p>Anne: Are all circles yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_19.html" }}],
[["quan.tr.al",19], "Message", {html: "<p>Anne: Are any circles yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_19.html" }}],
[["quan.fa.wh",19], "Message", {html: "<p>Anne: What color are the circles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_19.html" }}],
[["quan.fa.an",19], "Message", {html: "<p>Anne: Are all circles yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_19.html" }}],
[["quan.fa.al",19], "Message", {html: "<p>Anne: Are any circles yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_19.html" }}],
[["quan.ta.wh",19], "Message", {html: "<p>Anne: What color are the circles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_19.html" }}],
[["quan.ta.an",19], "Message", {html: "<p>Anne: Are all circles yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_19.html" }}],
[["quan.ta.al",19], "Message", {html: "<p>Anne: Are any circles yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_19.html" }}],
[["quan.tr.wh",20], "Message", {html: "<p>Anne: Which shape is blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_20.html" }}],
[["quan.tr.an",20], "Message", {html: "<p>Anne: Are there any blue shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_20.html" }}],
[["quan.tr.al",20], "Message", {html: "<p>Anne: Are both shapes blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_20.html" }}],
[["quan.fa.wh",20], "Message", {html: "<p>Anne: Which shape is blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_20.html" }}],
[["quan.fa.an",20], "Message", {html: "<p>Anne: Are there any blue shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_20.html" }}],
[["quan.fa.al",20], "Message", {html: "<p>Anne: Are both shapes blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_20.html" }}],
[["quan.ta.wh",20], "Message", {html: "<p>Anne: Which shape is blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_20.html" }}],
[["quan.ta.an",20], "Message", {html: "<p>Anne: Are there any blue shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_20.html" }}],
[["quan.ta.al",20], "Message", {html: "<p>Anne: Are both shapes blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_20.html" }}],
[["quan.tr.wh",21], "Message", {html: "<p>Anne: What color are the circles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_21.html" }}],
[["quan.tr.an",21], "Message", {html: "<p>Anne: Are all circles black?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_21.html" }}],
[["quan.tr.al",21], "Message", {html: "<p>Anne: Are there any black circles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_21.html" }}],
[["quan.fa.wh",21], "Message", {html: "<p>Anne: What color are the circles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_21.html" }}],
[["quan.fa.an",21], "Message", {html: "<p>Anne: Are all circles black?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_21.html" }}],
[["quan.fa.al",21], "Message", {html: "<p>Anne: Are there any black circles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_21.html" }}],
[["quan.ta.wh",21], "Message", {html: "<p>Anne: What color are the circles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_21.html" }}],
[["quan.ta.an",21], "Message", {html: "<p>Anne: Are all circles black?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_21.html" }}],
[["quan.ta.al",21], "Message", {html: "<p>Anne: Are there any black circles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_21.html" }}],
[["quan.tr.wh",22], "Message", {html: "<p>Anne: Which shape is yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_22.html" }}],
[["quan.tr.an",22], "Message", {html: "<p>Anne: Are there any yellow shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_22.html" }}],
[["quan.tr.al",22], "Message", {html: "<p>Anne: Are both shapes yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_22.html" }}],
[["quan.fa.wh",22], "Message", {html: "<p>Anne: Which shape is yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_22.html" }}],
[["quan.fa.an",22], "Message", {html: "<p>Anne: Are there any yellow shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_22.html" }}],
[["quan.fa.al",22], "Message", {html: "<p>Anne: Are both shapes yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_22.html" }}],
[["quan.ta.wh",22], "Message", {html: "<p>Anne: Which shape is yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_22.html" }}],
[["quan.ta.an",22], "Message", {html: "<p>Anne: Are there any yellow shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_22.html" }}],
[["quan.ta.al",22], "Message", {html: "<p>Anne: Are both shapes yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_22.html" }}],
[["quan.tr.wh",23], "Message", {html: "<p>Anne: What color are the circles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_23.html" }}],
[["quan.tr.an",23], "Message", {html: "<p>Anne: Are all circles orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_23.html" }}],
[["quan.tr.al",23], "Message", {html: "<p>Anne: Are there any orange circles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_23.html" }}],
[["quan.fa.wh",23], "Message", {html: "<p>Anne: What color are the circles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_23.html" }}],
[["quan.fa.an",23], "Message", {html: "<p>Anne: Are all circles orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_23.html" }}],
[["quan.fa.al",23], "Message", {html: "<p>Anne: Are there any orange circles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_23.html" }}],
[["quan.ta.wh",23], "Message", {html: "<p>Anne: What color are the circles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_23.html" }}],
[["quan.ta.an",23], "Message", {html: "<p>Anne: Are all circles orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_23.html" }}],
[["quan.ta.al",23], "Message", {html: "<p>Anne: Are there any orange circles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_23.html" }}],
[["quan.tr.wh",24], "Message", {html: "<p>Anne: Which shape is black?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_24.html" }}],
[["quan.tr.an",24], "Message", {html: "<p>Anne: Are there any black shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_24.html" }}],
[["quan.tr.al",24], "Message", {html: "<p>Anne: Are both shapes black?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_24.html" }}],
[["quan.fa.wh",24], "Message", {html: "<p>Anne: Which shape is black?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_24.html" }}],
[["quan.fa.an",24], "Message", {html: "<p>Anne: Are there any black shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_24.html" }}],
[["quan.fa.al",24], "Message", {html: "<p>Anne: Are both shapes black?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_24.html" }}],
[["quan.ta.wh",24], "Message", {html: "<p>Anne: Which shape is black?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_24.html" }}],
[["quan.ta.an",24], "Message", {html: "<p>Anne: Are there any black shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_24.html" }}],
[["quan.ta.al",24], "Message", {html: "<p>Anne: Are both shapes black?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_24.html" }}],
[["quan.tr.wh",25], "Message", {html: "<p>Anne: What color are the squares?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_25.html" }}],
[["quan.tr.an",25], "Message", {html: "<p>Anne: Are all squares red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_25.html" }}],
[["quan.tr.al",25], "Message", {html: "<p>Anne: Are any squares red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_25.html" }}],
[["quan.fa.wh",25], "Message", {html: "<p>Anne: What color are the squares?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_25.html" }}],
[["quan.fa.an",25], "Message", {html: "<p>Anne: Are all squares red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_25.html" }}],
[["quan.fa.al",25], "Message", {html: "<p>Anne: Are any squares red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_25.html" }}],
[["quan.ta.wh",25], "Message", {html: "<p>Anne: What color are the squares?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_25.html" }}],
[["quan.ta.an",25], "Message", {html: "<p>Anne: Are all squares red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_25.html" }}],
[["quan.ta.al",25], "Message", {html: "<p>Anne: Are any squares red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_25.html" }}],
[["quan.tr.wh",26], "Message", {html: "<p>Anne: What shape is orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_26.html" }}],
[["quan.tr.an",26], "Message", {html: "<p>Anne: Are there any orange shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_26.html" }}],
[["quan.tr.al",26], "Message", {html: "<p>Anne: Are both shapes orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_26.html" }}],
[["quan.fa.wh",26], "Message", {html: "<p>Anne: What shape is orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_26.html" }}],
[["quan.fa.an",26], "Message", {html: "<p>Anne: Are there any orange shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_26.html" }}],
[["quan.fa.al",26], "Message", {html: "<p>Anne: Are both shapes orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_26.html" }}],
[["quan.ta.wh",26], "Message", {html: "<p>Anne: What shape is orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_26.html" }}],
[["quan.ta.an",26], "Message", {html: "<p>Anne: Are there any orange shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_26.html" }}],
[["quan.ta.al",26], "Message", {html: "<p>Anne: Are both shapes orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_26.html" }}],
[["quan.tr.wh",27], "Message", {html: "<p>Anne: What color are the squares?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_27.html" }}],
[["quan.tr.an",27], "Message", {html: "<p>Anne: Are all squares yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_27.html" }}],
[["quan.tr.al",27], "Message", {html: "<p>Anne: Are any squares yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_27.html" }}],
[["quan.fa.wh",27], "Message", {html: "<p>Anne: What color are the squares?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_27.html" }}],
[["quan.fa.an",27], "Message", {html: "<p>Anne: Are all squares yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_27.html" }}],
[["quan.fa.al",27], "Message", {html: "<p>Anne: Are any squares yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_27.html" }}],
[["quan.ta.wh",27], "Message", {html: "<p>Anne: What color are the squares?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_27.html" }}],
[["quan.ta.an",27], "Message", {html: "<p>Anne: Are all squares yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_27.html" }}],
[["quan.ta.al",27], "Message", {html: "<p>Anne: Are any squares yellow?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_27.html" }}],
[["quan.tr.wh",28], "Message", {html: "<p>Anne: What shape is orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_28.html" }}],
[["quan.tr.an",28], "Message", {html: "<p>Anne: Are there any orange shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_28.html" }}],
[["quan.tr.al",28], "Message", {html: "<p>Anne: Are both shapes orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_28.html" }}],
[["quan.fa.wh",28], "Message", {html: "<p>Anne: What shape is orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_28.html" }}],
[["quan.fa.an",28], "Message", {html: "<p>Anne: Are there any orange shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_28.html" }}],
[["quan.fa.al",28], "Message", {html: "<p>Anne: Are both shapes orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_28.html" }}],
[["quan.ta.wh",28], "Message", {html: "<p>Anne: What shape is orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_28.html" }}],
[["quan.ta.an",28], "Message", {html: "<p>Anne: Are there any orange shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_28.html" }}],
[["quan.ta.al",28], "Message", {html: "<p>Anne: Are both shapes orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_28.html" }}],
[["quan.tr.wh",29], "Message", {html: "<p>Anne: What color are the squares?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_29.html" }}],
[["quan.tr.an",29], "Message", {html: "<p>Anne: Are all squares black?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_29.html" }}],
[["quan.tr.al",29], "Message", {html: "<p>Anne: Are there any black squares?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_29.html" }}],
[["quan.fa.wh",29], "Message", {html: "<p>Anne: What color are the squares?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_29.html" }}],
[["quan.fa.an",29], "Message", {html: "<p>Anne: Are all squares black?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_29.html" }}],
[["quan.fa.al",29], "Message", {html: "<p>Anne: Are there any black squares?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_29.html" }}],
[["quan.ta.wh",29], "Message", {html: "<p>Anne: What color are the squares?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_29.html" }}],
[["quan.ta.an",29], "Message", {html: "<p>Anne: Are all squares black?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_29.html" }}],
[["quan.ta.al",29], "Message", {html: "<p>Anne: Are there any black squares?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_29.html" }}],
[["quan.tr.wh",30], "Message", {html: "<p>Anne: What shape is black?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_30.html" }}],
[["quan.tr.an",30], "Message", {html: "<p>Anne: Are there any black shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_30.html" }}],
[["quan.tr.al",30], "Message", {html: "<p>Anne: Are both shapes black?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_30.html" }}],
[["quan.fa.wh",30], "Message", {html: "<p>Anne: What shape is black?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_30.html" }}],
[["quan.fa.an",30], "Message", {html: "<p>Anne: Are there any black shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_30.html" }}],
[["quan.fa.al",30], "Message", {html: "<p>Anne: Are both shapes black?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_30.html" }}],
[["quan.ta.wh",30], "Message", {html: "<p>Anne: What shape is black?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_30.html" }}],
[["quan.ta.an",30], "Message", {html: "<p>Anne: Are there any black shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_30.html" }}],
[["quan.ta.al",30], "Message", {html: "<p>Anne: Are both shapes black?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_30.html" }}],
[["quan.tr.wh",31], "Message", {html: "<p>Anne: What color are the shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_31.html" }}],
[["quan.tr.an",31], "Message", {html: "<p>Anne: Are all shapes orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_31.html" }}],
[["quan.tr.al",31], "Message", {html: "<p>Anne: Are any shapes orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_31.html" }}],
[["quan.fa.wh",31], "Message", {html: "<p>Anne: What color are the shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_31.html" }}],
[["quan.fa.an",31], "Message", {html: "<p>Anne: Are all shapes orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_31.html" }}],
[["quan.fa.al",31], "Message", {html: "<p>Anne: Are any shapes orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_31.html" }}],
[["quan.ta.wh",31], "Message", {html: "<p>Anne: What color are the shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_31.html" }}],
[["quan.ta.an",31], "Message", {html: "<p>Anne: Are all shapes orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_31.html" }}],
[["quan.ta.al",31], "Message", {html: "<p>Anne: Are any shapes orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_31.html" }}],
[["quan.tr.wh",32], "Message", {html: "<p>Anne: Which shape is orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_32.html" }}],
[["quan.tr.an",32], "Message", {html: "<p>Anne: Are there any orange shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_32.html" }}],
[["quan.tr.al",32], "Message", {html: "<p>Anne: Are both shapes orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_32.html" }}],
[["quan.fa.wh",32], "Message", {html: "<p>Anne: Which shape is orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_32.html" }}],
[["quan.fa.an",32], "Message", {html: "<p>Anne: Are there any orange shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_32.html" }}],
[["quan.fa.al",32], "Message", {html: "<p>Anne: Are both shapes orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_32.html" }}],
[["quan.ta.wh",32], "Message", {html: "<p>Anne: Which shape is orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_32.html" }}],
[["quan.ta.an",32], "Message", {html: "<p>Anne: Are there any orange shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_32.html" }}],
[["quan.ta.al",32], "Message", {html: "<p>Anne: Are both shapes orange?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_32.html" }}],
[["quan.tr.wh",33], "Message", {html: "<p>Anne: What color are the squares?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_33.html" }}],
[["quan.tr.an",33], "Message", {html: "<p>Anne: Are all squares blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_33.html" }}],
[["quan.tr.al",33], "Message", {html: "<p>Anne: Are there any blue squares?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_33.html" }}],
[["quan.fa.wh",33], "Message", {html: "<p>Anne: What color are the squares?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_33.html" }}],
[["quan.fa.an",33], "Message", {html: "<p>Anne: Are all squares blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_33.html" }}],
[["quan.fa.al",33], "Message", {html: "<p>Anne: Are there any blue squares?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_33.html" }}],
[["quan.ta.wh",33], "Message", {html: "<p>Anne: What color are the squares?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_33.html" }}],
[["quan.ta.an",33], "Message", {html: "<p>Anne: Are all squares blue?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_33.html" }}],
[["quan.ta.al",33], "Message", {html: "<p>Anne: Are there any blue squares?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_33.html" }}],
[["quan.tr.wh",34], "Message", {html: "<p>Anne: What shape is black?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_34.html" }}],
[["quan.tr.an",34], "Message", {html: "<p>Anne: Are there any black shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_34.html" }}],
[["quan.tr.al",34], "Message", {html: "<p>Anne: Are both shapes black?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_34.html" }}],
[["quan.fa.wh",34], "Message", {html: "<p>Anne: What shape is black?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_34.html" }}],
[["quan.fa.an",34], "Message", {html: "<p>Anne: Are there any black shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_34.html" }}],
[["quan.fa.al",34], "Message", {html: "<p>Anne: Are both shapes black?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_34.html" }}],
[["quan.ta.wh",34], "Message", {html: "<p>Anne: What shape is black?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_34.html" }}],
[["quan.ta.an",34], "Message", {html: "<p>Anne: Are there any black shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_34.html" }}],
[["quan.ta.al",34], "Message", {html: "<p>Anne: Are both shapes black?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_34.html" }}],
[["quan.tr.wh",35], "Message", {html: "<p>Anne: What color are the circles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_35.html" }}],
[["quan.tr.an",35], "Message", {html: "<p>Anne: Are all circles green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_35.html" }}],
[["quan.tr.al",35], "Message", {html: "<p>Anne: Are here any green circles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_35.html" }}],
[["quan.fa.wh",35], "Message", {html: "<p>Anne: What color are the circles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_35.html" }}],
[["quan.fa.an",35], "Message", {html: "<p>Anne: Are all circles green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_35.html" }}],
[["quan.fa.al",35], "Message", {html: "<p>Anne: Are here any green circles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_35.html" }}],
[["quan.ta.wh",35], "Message", {html: "<p>Anne: What color are the circles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_35.html" }}],
[["quan.ta.an",35], "Message", {html: "<p>Anne: Are all circles green?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_35.html" }}],
[["quan.ta.al",35], "Message", {html: "<p>Anne: Are here any green circles?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_35.html" }}],
[["quan.tr.wh",36], "Message", {html: "<p>Anne: Which shape is red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_36.html" }}],
[["quan.tr.an",36], "Message", {html: "<p>Anne: Are there any red shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_36.html" }}],
[["quan.tr.al",36], "Message", {html: "<p>Anne: Are both shapes red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_tr_36.html" }}],
[["quan.fa.wh",36], "Message", {html: "<p>Anne: Which shape is red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_36.html" }}],
[["quan.fa.an",36], "Message", {html: "<p>Anne: Are there any red shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_36.html" }}],
[["quan.fa.al",36], "Message", {html: "<p>Anne: Are both shapes red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_fa_36.html" }}],
[["quan.ta.wh",36], "Message", {html: "<p>Anne: Which shape is red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_36.html" }}],
[["quan.ta.an",36], "Message", {html: "<p>Anne: Are there any red shapes?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_36.html" }}],
[["quan.ta.al",36], "Message", {html: "<p>Anne: Are both shapes red?</p><p><i>Press any key to continue.</i></p>"},"VraagX", {html:{ include: "quant_ta_36.html" }}],

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
