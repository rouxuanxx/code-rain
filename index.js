const cvs=document.getElementById("canvas");
const width=window.innerWidth*devicePixelRatio; 
const height=window.innerHeight*devicePixelRatio;
cvs.width=width;
cvs.height=height;
const ctx=cvs.getContext("2d");
const fontSize=25*devicePixelRatio;
function getRandomColor()
{
    const FontColors=[
        '#33b5e5',
        '#0099cc',
        '#aa66cc',
        '#9933cc',
        '#99cc00',
        '#669900',
        '#ffbb33',
        '#ff8800',
        '#ff4444',
        '#cc0000',
    ]
    return FontColors[Math.floor(Math.random()*FontColors.length)];
}
function getRandomChar()
{
    const str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvw';
    return str[Math.floor(Math.random()*str.length)];
}
const columnCount=Math.floor(width/fontSize);
const arr=new Array(columnCount).fill(0);
function draw()
{
    ctx.fillStyle='rgba(240,240,240,0.1)';
    ctx.fillRect(0,0,width,height);
    for(let i=0; i<columnCount; i++)
    {   
        ctx.fillStyle=getRandomColor();
        ctx.font=`${fontSize}px Arial`
        const y=(arr[i]+1)*fontSize;
        const x=i*columnCount;
        const char=getRandomChar();
        ctx.fillText(char,x,y);
        if(y>height&&Math.random()>0.9)
        {
            arr[i]=0;
        }
        else{
            arr[i]++;
        }
        
    }
}
draw();
setInterval(draw,40);