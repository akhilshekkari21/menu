import React from 'react'

const Menu = ({menuItems}) => {
  return (
    <div>
        {
            menuItems.map((menuItem) =>{
                const{id,title,img,desc,price} = menuItem;
                return(
                    <article key={id}>

                        <img src={img} alt=  {title} />
                        <h4>{title}</h4>
                        <h4>{price}</h4>
                        <p>{desc}</p>
                    </article>
                )
            })
        }

    </div>
  )
}

export default Menu