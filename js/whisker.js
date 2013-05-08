/*
 * Author: Ben Follington 2013
 * Voltic.com.au
 *
 */

function wJSDrawGraph(w, minIn, q1In, medIn, q3In, maxIn)
{
    console.log("WJS Plot");
    //Grab our arguments
    var min = parseInt(minIn);
    var q1 = parseInt(q1In);
    var med = parseInt(medIn);
    var q3 = parseInt(q3In);
    var max = parseInt(maxIn);
    
    //Define some constants we'll use throughout
    var graphWidth = w;
    var lineColour = "#000000";
    
    //Check for errors!
    if (isNaN(min) || isNaN(q1) || isNaN(med) || isNaN(q3) || isNaN(max))
    {
        alert("Whisker: Please input actual numbers!");
        return;
    }
    
    if (q1 < min || med < q1 || q3 < med || max < q3)
    {
        alert("Numbers make no sense.");
        return;
    }
    
    //Log what we were given
    console.log("Whisker: got: " + min + "," + q1 + "," + med + "," + q3 + "," + max);
    
    //Get range of graph, and convert units to pixels
    var range = max - min;
    var rectWidth = q3 - q1;
    var pixelsPerUnit = graphWidth / range;
    
    //Find our div we are writing to
    var graphDiv = document.getElementById("WJSGraph");
    graphDiv.style.width = graphWidth;
    
    //Insert all the elements we need
    graphDiv.innerHTML = '<div class="WJSBar" id="WJSLeftBar"></div><div class="WJSBar" id="WJSCentralRect"><div class="WJSBar" id="WJSMidBar"></div></div><div class="WJSBar" id="WJSRightBar"></div><div id="WJSLine"></div>';
    
    //Get our references to them
    var leftBar = document.getElementById("WJSLeftBar");
    var centralRect = document.getElementById("WJSCentralRect");
    var midBar = document.getElementById("WJSMidBar");
    var rightBar = document.getElementById("WJSRightBar");
    var line = document.getElementById("WJSLine");
    
    //Do all the styling, this is pretty self explanatory
    leftBar.style.width = "1px";
    leftBar.style.backgroundColor = lineColour;
    centralRect.style.marginLeft = ((q1 - min ) * pixelsPerUnit).toString() + "px";
    
    centralRect.style.width = (rectWidth * pixelsPerUnit).toString() + "px";    
    centralRect.style.border = "1px solid " + lineColour;
    
    midBar.style.marginLeft = ((med - q1) * pixelsPerUnit).toString() + "px";
    midBar.style.width = "1px";
    midBar.style.backgroundColor = lineColour;
    
    rightBar.style.width = "1px";
    rightBar.style.backgroundColor = lineColour;
    rightBar.style.marginLeft = ((max - q3) * pixelsPerUnit).toString() + "px";
    
    line.style.width = (graphWidth + 3).toString() + "px";
}