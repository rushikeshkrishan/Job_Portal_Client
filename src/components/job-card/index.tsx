import { ContainerOutlined, EnvironmentOutlined, MedicineBoxOutlined } from '@ant-design/icons'
import { Flex, Tag, Card } from 'antd';
import React from 'react'

async function JobCard() {
    const itemsArray = Array.from({ length: 10 }, (_, index) => index + 1);
    return (
        <div>
            {
                itemsArray.map((index) => {
                    return (
                        <Card hoverable key={index} style={{ marginBottom: "1rem",minWidth:"700px" }}>
                            <div style={{ display: "flex" }}>
                                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
                                    <img width={150} height={150} style={{ objectFit: "contain" }} alt="example" src="https://cdn.dribbble.com/users/847898/screenshots/3759550/media/94b2a5cd68ac9ba4855abfce0cc0e39d.jpg" />
                                </div>
                                <div>
                                    <h2>Technical Project Manager (Autosar)</h2>
                                    <div style={{ margin: ".3rem 0px .3rem 0px", fontSize: "16px" }}>
                                        <EnvironmentOutlined /> <span>Pune</span>
                                    </div>
                                    <div style={{ margin: ".3rem 0px .3rem 0px", fontSize: "16px" }}>
                                        <MedicineBoxOutlined /> <span>10-15 years</span>
                                    </div>
                                    <div style={{ margin: ".3rem 0px .3rem 0px", fontSize: "16px" }}>
                                        <ContainerOutlined /> <span>ata Elxsi is truly your Home to a billion possibilities. We believe in opportunities for everyone - to be bold, curious and seek to shape the future. Explore what is possible, discover what you love to do and find accelerated paths for growth. At Tata Elxsi YOU MATTER!</span>
                                    </div>
                                    <div style={{ color: "blue" }}>
                                        <span>Openings : </span> <span>2</span>
                                    </div>
                                    <div style={{ margin: ".3rem 0px .3rem 0px", fontSize: "16px" }}>
                                        <span>Applicants : </span> <span>223</span>
                                    </div>
                                    <Flex gap="4px 0" wrap >
                                        <Tag color="#001529">HTML</Tag>
                                        <Tag color="#001529">CSS</Tag>
                                        <Tag color="#001529">JS</Tag>
                                        <Tag color="#001529">REACT JS</Tag>
                                        <Tag color="#001529">NEXT JS</Tag>
                                        <Tag color="#001529">NODE JS</Tag>
                                        <Tag color="#001529">EXPRESS JS</Tag>
                                        <Tag color="#001529">MONGODB JS</Tag>
                                    </Flex>
                                </div>

                            </div>
                        </Card>
                    )
                })
            }
        </div>
    )
}

export default JobCard