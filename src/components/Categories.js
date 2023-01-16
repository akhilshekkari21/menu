import React from 'react'

const Categories = ({categories,filterItems}) => {
  return (
    <div>
       {
        categories.map((cate,index) =>{
            return (
                <button key={index} onClick = {() => filterItems(cate)}>{cate}</button>
            )
        })
       }
    </div>
  )
}

export default Categories