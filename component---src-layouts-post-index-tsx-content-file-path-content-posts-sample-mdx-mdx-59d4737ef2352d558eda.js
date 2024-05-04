"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[797],{1808:function(e,n,t){t.d(n,{X:function(){return E}});var l=t(8102),a=t(9646),s=t(3696),r=t(1971),c=t(4471),o=t(5754),i=t(4807),u=t(7109),p=t(6195),m=t(1785);const h=e=>{let{title:n,date:t,...a}=e;const s=t?p.c9.fromISO(t).toLocaleString(p.c9.DATE_FULL):"";return(0,m.Y)(i.A,(0,l.A)({spacing:1},a),(0,m.Y)(u.A,{variant:"caption"},s),(0,m.Y)(u.A,{variant:"h2"},n))},d={main:e=>(0,m.AH)({minHeight:"95vh",marginBlockStart:e.spacing(6),marginBlockEnd:e.spacing(4)},"","","",""),header:e=>(0,m.AH)({marginBlockEnd:e.spacing(4)},"","","","")},E=e=>{let{appDrawerProps:n,appHeaderProps:t,appFooterProps:i,postHeaderProps:u,children:p}=e;return(0,m.Y)(s.Fragment,null,(0,m.Y)(o.j,t),(0,m.Y)(r.B,n),(0,m.Y)(a.A,{maxWidth:"md",css:d.main},(0,m.Y)(h,(0,l.A)({},u,{css:d.header})),p),(0,m.Y)(c.j,i))}},9074:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var l=t(3023),a=t(3696),s=t(6162);function r(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",em:"em",strong:"strong",ul:"ul",li:"li",ol:"ol",a:"a",img:"img",blockquote:"blockquote",span:"span",hr:"hr",br:"br"},(0,l.R)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.h1,null,"Sample MDX File"),"\n",a.createElement(n.p,null,"This is a sample MDX file demonstrating various Markdown syntax elements."),"\n",a.createElement(n.h2,null,"Headings"),"\n",a.createElement(n.h3,null,"Heading Level 3"),"\n",a.createElement(n.h4,null,"Heading Level 4"),"\n",a.createElement(n.h5,null,"Heading Level 5"),"\n",a.createElement(n.h6,null,"Heading Level 6"),"\n",a.createElement(n.h2,null,"Text Formatting"),"\n",a.createElement(n.p,null,a.createElement(n.em,null,"This text")," is italicized."),"\n",a.createElement(n.p,null,a.createElement(n.strong,null,"This text")," is bold."),"\n",a.createElement(n.p,null,a.createElement(n.strong,null,a.createElement(n.em,null,"This text"))," is both italicized and bold."),"\n",a.createElement(n.h2,null,"Lists"),"\n",a.createElement(n.h3,null,"Unordered List"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Item 1"),"\n",a.createElement(n.li,null,"Item 2","\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Subitem 2.1"),"\n",a.createElement(n.li,null,"Subitem 2.2"),"\n"),"\n"),"\n",a.createElement(n.li,null,"Item 3"),"\n"),"\n",a.createElement(n.h3,null,"Ordered List"),"\n",a.createElement(n.ol,null,"\n",a.createElement(n.li,null,"First Item"),"\n",a.createElement(n.li,null,"Second Item"),"\n",a.createElement(n.li,null,"Third Item"),"\n"),"\n",a.createElement(n.h2,null,"Links"),"\n",a.createElement(n.p,null,a.createElement(n.a,{href:"https://www.google.com"},"Link to Google")),"\n",a.createElement(n.h2,null,"Images"),"\n",a.createElement(n.img,{src:"https://via.placeholder.com/150",alt:"Alt Text"}),"\n",a.createElement(n.h2,null,"Blockquotes"),"\n",a.createElement(n.blockquote,null,"\n",a.createElement(n.p,null,"This is a blockquote.\nYou can have multiple lines."),"\n"),"\n",a.createElement(n.h2,null,"Code"),"\n",a.createElement(n.p,null,"Inline code can be written like ",a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">const variable = 10;</code>'}}),"."),"\n",a.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="javascript"><pre style="counter-reset: linenumber NaN" class="language-javascript line-numbers"><code class="language-javascript"><span class="token comment">// This is a code block</span>\n<span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code><span aria-hidden="true" class="line-numbers-rows" style="white-space: normal; width: auto; left: 0;"><span></span><span></span><span></span><span></span></span></pre></div>'}}),"\n",a.createElement(n.h2,null,"Tables"),"\n",a.createElement(n.p,null,"| Header 1 | Header 2 |\n| -------- | -------- |\n| Cell 1,1 | Cell 1,2 |\n| Cell 2,1 | Cell 2,2 |"),"\n",a.createElement(n.h2,null,"Horizontal Rule"),"\n",a.createElement(n.hr),"\n",a.createElement(n.h2,null,"Line Breaks"),"\n",a.createElement(n.p,null,"You can use two spaces at the end of a line for a line break.",a.createElement(n.br),"\n","Like this."),"\n",a.createElement(n.h2,null,"Escaping"),"\n",a.createElement(n.p,null,"You can escape Markdown characters using a backslash: *italic*, **bold**."),"\n",a.createElement(n.h2,null,"Footnotes"),"\n",a.createElement(n.p,null,"Here's a footnote[^1]."),"\n",a.createElement(n.p,null,"[^1]: This is the footnote text."),"\n",a.createElement(n.h2,null,"Math Equations (if supported)"),"\n",a.createElement(n.p,null,"You can write math equations using LaTeX, like $E=mc^2$."),"\n",a.createElement(n.h2,null,"Checkboxes"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"[x] Completed task"),"\n",a.createElement(n.li,null,"[ ] Incomplete task"),"\n"),"\n",a.createElement(n.h2,null,"Custom Components (if supported)"),"\n",a.createElement(s.j,{skill:"typescript"}),"\n",a.createElement(n.h2,null,"Embedding Videos (if supported)"),"\n",a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/C0DPdy98e4c",frameborder:"0",allowfullscreen:!0}))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.R)(),e.components);return n?a.createElement(n,e,a.createElement(r,e)):r(e)},o=t(8102),i=t(3236),u=t(1808),p=t(7674),m=t(284),h=t(7182),d=t(1785);const E=e=>{var n,t,l,a,s,r;let{children:c,data:E}=e;const g=(0,h.Q)(),k=(0,p.P)();return(0,d.Y)(m.g,null,(0,d.Y)(i.K,null,(0,d.Y)("title",null,null===(n=E.mdx)||void 0===n||null===(t=n.frontmatter)||void 0===t?void 0:t.title," | ",g.title)),(0,d.Y)(u.X,(0,o.A)({},k,{postHeaderProps:{title:null===(l=E.mdx)||void 0===l||null===(a=l.frontmatter)||void 0===a?void 0:a.title,date:null===(s=E.mdx)||void 0===s||null===(r=s.frontmatter)||void 0===r?void 0:r.date}}),c))};function g(e){return a.createElement(E,e,a.createElement(c,e))}}}]);
//# sourceMappingURL=component---src-layouts-post-index-tsx-content-file-path-content-posts-sample-mdx-mdx-59d4737ef2352d558eda.js.map