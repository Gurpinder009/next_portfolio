export const FadeAnimationVariant = {
    hidden:{opacity:0},
    visible:{opacity:1, transition: {
        duration:1.6
      },}
}




export const FadeTopAnimationVariant = {
    hidden:{opacity:0,y:100},
    visible:{opacity:1,y:0, transition: {
        duration:1.4
      },},

      hover:{
        boxShadow:"0 0 20px #b3b3b3",
        transition:{
          duration:0
        }
      }

}

export const FadeTopInvertAnimationVariant = {
    hidden:{opacity:0,y:100,rotate:180},
    visible:{opacity:1,y:0, transition: {
        duration:1
      },}
}


export const FadeLeftAnimationVariant = {
    hidden:{opacity:0,x:-100},
    visible:{opacity:1,x:0, transition: {
        duration:1
      },}
}

export const FadeRightAnimationVariant = {
    hidden:{opacity:0,x:100},
    visible:{opacity:1,x:0, transition: {
        duration:1
      },}
}


export const FadeRightInvertAnimationVariant = {
    hidden:{opacity:0,x:100,rotate:180},
    visible:{opacity:1,x:0, transition: {
        duration:1
      },}
}



export const WidthAnimationVariant = {
  hidden:{width:0},
  visible:width=>({width:`${width}%`,transition:{duration:2}})
}



export const ButtonHoverEffect = {
    hover:{
      backgroundColor:"#454545",
      color:"#fff",
      transition:{
        duration:0.8
      }
    }
}


