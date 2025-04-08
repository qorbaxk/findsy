import Image, { ImageProps } from "next/image"

const BASE_PATH = process.env.NODE_ENV === 'production' ? '/findsy': ''

const Img = (props:ImageProps)=>{

  return <Image {...props} src={`${BASE_PATH}${props.src}`}/>
}
export default Img  