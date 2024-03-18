import { Grid } from 'antd';

function Merch(){
    const { useBreakpoint } = Grid;
    const breakpoints = useBreakpoint();
    let imgPos = "1rem";
    let imgSize = 350;
    let tagHeight = "4rem";
    let tagWidth = "8rem";
    let fontSize = "2.5rem";
    let tagB = "3.25rem";
    let tagR = "-1.25rem";

    if(breakpoints.xxl) {imgSize = 325; imgPos = "2rem"; tagHeight="4rem"; tagWidth="8rem"; fontSize = "2.5rem"; tagB = "3.25rem"; tagR = "-1.25rem";}
    else if(breakpoints.xl) {imgSize = 350; imgPos = "2rem"}
    else if(breakpoints.md) {imgSize = 200; imgPos = "2rem"; tagHeight="3rem"; tagWidth="6rem"; fontSize = "1.9rem"; tagB = "2rem"; tagR = "-1.25rem";}
    else if(breakpoints.sm) {imgSize = 150; imgPos = "2rem"; tagHeight="2.4rem"; tagWidth="4rem"; fontSize = "1.5rem"; tagB = "2rem"; tagR = "-1.25rem";}
    else if(breakpoints.xs) {imgSize = 150; imgPos = "2rem"; tagHeight="2.4rem"; tagWidth="4rem"; fontSize = "1.5rem"; tagB = "2rem"; tagR = "-1.25rem";}

    return <div className="merch_items" style={{top : imgPos}}>
                <a className="merch_item" href="https://shop.spotify.com/en/artist/6lRAIvgICW7hhoZHsm49hT/product/vintage-black-tee?utm_source=spotify&utm_medium=app-artistprofile&utm_term=00a466d4d0876b516ca11e088b0c490b8b4c22c04dbae999317451"  target="_blank">
      
                    <img  src="https://cdn.shopify.com/s/files/1/0677/1150/0574/products/mens-premium-heavyweight-tee-black-front-63d604d1c4b70.png?v=1674970387"  width={imgSize} ></img>
                    
                    <text className='price_tag' style={{height:tagHeight,width:tagWidth,fontSize:fontSize,bottom:tagB,right:tagR}}> $30 </text>
                </a>
                <a className="merch_item" href="https://shop.spotify.com/en/artist/6lRAIvgICW7hhoZHsm49hT/product/vintage-white-tee?utm_medium=app-artistprofile&utm_source=spotify&utm_content=artiststore&utm_term=00a466d4d0876b516ca11e088b0c490b8b4c22c04dbae999317451&utm_promo=&container_platform=&utm_campaign="  target="_blank">
      
                    <img  src="https://cdn.shopify.com/s/files/1/0677/1150/0574/products/mens-premium-heavyweight-tee-white-front-63d6055562915.png?v=1674970480"  width={imgSize} ></img>
                    
                    <text className='price_tag' style={{height:tagHeight,width:tagWidth,fontSize:fontSize,bottom:tagB,right:tagR}}> $30 </text>
                </a>
                <a className="merch_item" href="https://shop.spotify.com/en/artist/6lRAIvgICW7hhoZHsm49hT/product/ethan-gander-trucker-hat?utm_medium=app-artistprofile&utm_source=spotify&utm_content=artiststore&utm_term=00a466d4d0876b516ca11e088b0c490b8b4c22c04dbae999317451&utm_promo=&container_platform=&utm_campaign="  target="_blank">
      
                    <img  src="https://cdn.shopify.com/s/files/1/0677/1150/0574/products/unisex-organic-cotton-t-shirt-heather-grey-zoomed-in-3-637bd30a7d07d.jpg?v=1669062634"  width={imgSize} ></img>
                    
                    <text className='price_tag' style={{height:tagHeight,width:tagWidth,fontSize:fontSize,bottom:tagB,right:tagR}}> $30 </text>
                </a>
                <a className="merch_item" href="https://shop.spotify.com/en/artist/6lRAIvgICW7hhoZHsm49hT/product/ethan-gander-trucker-hat?utm_medium=app-artistprofile&utm_source=spotify&utm_content=artiststore&utm_term=00a466d4d0876b516ca11e088b0c490b8b4c22c04dbae999317451&utm_promo=&container_platform=&utm_campaign="  target="_blank">
      
                    <img  src="https://cdn.shopify.com/s/files/1/0677/1150/0574/products/foam-trucker-hat-black-white-black-one-size-right-front-637be5fb67931.jpg?v=1669064196"  width={imgSize} ></img>
                    
                    <text className='price_tag' style={{height:tagHeight,width:tagWidth,fontSize:fontSize,bottom:tagB,right:tagR}}> $26 </text>
                </a>
                <a className="merch_item" href="https://cdn.shopify.com/s/files/1/0677/1150/0574/files/unisex-premium-hoodie-black-front-646aea15f17cd.jpg?v=1684728351"  target="_blank">
      
                    <img  src="https://cdn.shopify.com/s/files/1/0677/1150/0574/products/cuffed-beanie-dark-grey-front-637bd4f36fe00.jpg?v=1669059843"  width={imgSize} ></img>
                    
                    <text className='price_tag' style={{height:tagHeight,width:tagWidth,fontSize:fontSize,bottom:tagB,right:tagR}}> $20 </text>
                </a>
                <a className="merch_item" href="https://cdn.shopify.com/s/files/1/0677/1150/0574/files/unisex-premium-hoodie-black-front-646aea15f17cd.jpg?v=1684728351"  target="_blank">
      
                    <img  src="https://cdn.shopify.com/s/files/1/0677/1150/0574/products/eco-tote-bag-oyster-front-63755c98a8a14.jpg?v=1668635809"  width={imgSize} ></img>
                    
                    <text className='price_tag' style={{height:tagHeight,width:tagWidth,fontSize:fontSize,bottom:tagB,right:tagR}}> $22 </text>
                </a>
                <a className="merch_item" href="https://cdn.shopify.com/s/files/1/0677/1150/0574/files/unisex-premium-hoodie-black-front-646aea15f17cd.jpg?v=1684728351"  target="_blank">
      
                    <img  src="https://cdn.shopify.com/s/files/1/0677/1150/0574/files/unisex-premium-hoodie-black-front-646aea15f17cd.jpg?v=1684728351"  width={imgSize} ></img>
                    
                    <text className='price_tag' style={{height:tagHeight,width:tagWidth,fontSize:fontSize,bottom:tagB,right:tagR}}> $65 </text>
                </a>
                <a className="merch_item" href="https://cdn.shopify.com/s/files/1/0677/1150/0574/files/unisex-premium-hoodie-black-front-646aea15f17cd.jpg?v=1684728351"  target="_blank">
      
                    <img  src="https://cdn.shopify.com/s/files/1/0677/1150/0574/files/recycled-tracksuit-jacket-black-front-646af134520be.jpg?v=1684730168"  width={imgSize} ></img>
                    
                    <text className='price_tag' style={{height:tagHeight,width:tagWidth,fontSize:fontSize,bottom:tagB,right:tagR}}> $65 </text>
                </a>
                
        </div>;
}

export default Merch;