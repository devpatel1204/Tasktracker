import PropTypes from 'prop-types'

const Header= (props) =>{
    return(       
<h1 style={{color:'red',backgroundColor:'black'}}>
    {props.title}
</h1>

    )
    }

    Header.defaultProps={
        title:'dev patel'
    }

Header.propTypes={
    title: PropTypes.string,
    //if it other then string it gives warning in browser console
}

export default Header