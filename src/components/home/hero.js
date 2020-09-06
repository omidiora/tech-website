import React from 'react';
import { Carousel , Button } from 'antd';

const items=[
    {
        key:1,
        title:'loremahijdklvnkdnvknd,lv',
        content:'orem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maxime corporis, quaerat perspiciatis, alias voluptate sed harum aliquam animi, ab magnam ipsa numquam non deleniti accusamus suscipit. Ad, asperiores assumenda.'

    },

    {
        key:2,
        title:'loremahijdklvnkdnvknd,lv',
        content:'orem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maxime corporis, quaerat perspiciatis, alias voluptate sed harum aliquam animi, ab magnam ipsa numquam non deleniti accusamus suscipit. Ad, asperiores assumenda.'

    },
    {
        key:3,
        title:'loremahijdklvnkdnvknd,lv',
        content:'orem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maxime corporis, quaerat perspiciatis, alias voluptate sed harum aliquam animi, ab magnam ipsa numquam non deleniti accusamus suscipit. Ad, asperiores assumenda.'

    }




]
function Apphero() {
    return (
        <div className='heroBlock'>
            <Carousel>
                {
                    items.map(item=>{
                return (
                    <div className='container-fluid'>
                    <div className='content'>
                       <h3> {item.title}</h3>
                        <p> {item.content}</p>
                       <div className='btnHolder'>
                       <Button type='primary'>Learn More</Button>
                       <Button size='large'  >Watch a Demo</Button>
                       </div>
                    </div>
                    </div>
                )
                    })
                }

  </Carousel>
        </div>
    )
}

export default Apphero
