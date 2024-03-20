class Layout{
    constructor(props){
       return (props)
    }
}

class Footer extends Layout{
    constructor(props){
        super(props);
    }

    addRow(){
        console.log('One row added')
    }
}

console.log(new Footer('ifat'))

export default Footer;