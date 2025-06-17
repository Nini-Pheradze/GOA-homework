// Select a <div> with the id content and use removeChild to remove its first child element.

function removeChild() {
    let div = document.getElementsById('div1');

    let p1 = div.p1;

    div.removeChild(p1);
}

removeChild()

// Create a <ul> with three <li> items, then use removeChild to remove the last <li> from the <ul>.