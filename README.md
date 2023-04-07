## Font Size Units
### em
em is a relative unit. 1em is equal to the current font size. If you specify font-size: 2em on an element that has a font-size of 16px (the browser default), 2em will resolve to 32px.
- em is dependent on the font-size of the parent element.
### rem
rem is a relative unit. 1rem is equal to the font size of the root element. If you specify font-size: 2rem on an element that has a font-size of 16px (the browser default), 2rem will resolve to 32px.
- rem is not dependent on the font-size of the root element.
- It dosen't matter what font-size the parent element has, rem will always be the same.
#### Industry Standard rem units using level for headings
- h1 { font-size: 2.5rem; }
- h2 { font-size: 2rem; }
- h3 { font-size: 1.75rem; }
- h4 { font-size: 1.5rem; }
- h5 { font-size: 1.25rem; }
- h6 { font-size: 1rem; }
- p { font-size: 1rem; }
#### If you want you can use px along with rem and em to strictly define the font size.

