import { Card } from 'antd'
import React from 'react'

function Advertisement() {
    const { Meta } = Card;

    return (
        <div style={{width:"25%",height:"auto"}}>
            <Card  cover={<img alt="example" style={{height:"200px",objectFit:"contain"}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} hoverable style={{minHeight:"300px",margin:"1rem"}}>
            <Meta title="Europe Street beat" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eum eligendi reiciendis tempore ipsum voluptatibus natus excepturi enim? Voluptates dolores unde optio magni, magnam repellat tenetur incidunt iste porro sint." />
            </Card>
            <Card  cover={<img alt="example" style={{height:"200px",objectFit:"contain"}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} hoverable style={{minHeight:"300px",margin:"1rem"}}>
            <Meta title="Europe Street beat" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eum eligendi reiciendis tempore ipsum voluptatibus natus excepturi enim? Voluptates dolores unde optio magni, magnam repellat tenetur incidunt iste porro sint." />
            </Card>
            <Card  cover={<img alt="example" style={{height:"200px",objectFit:"contain"}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} hoverable style={{minHeight:"300px",margin:"1rem"}}>
            <Meta title="Europe Street beat" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eum eligendi reiciendis tempore ipsum voluptatibus natus excepturi enim? Voluptates dolores unde optio magni, magnam repellat tenetur incidunt iste porro sint." />
            </Card>
        </div>
    )
}

export default Advertisement