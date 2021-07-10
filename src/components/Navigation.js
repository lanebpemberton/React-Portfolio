import React from 'react';

const styles = {
    navbar:{
        color:'white'
    },
    links:{
        marginRight:10
    }
}

function Navigation()
{
    //loop through navigation links and highlight the correct one (e.g 'active' class)

    return (
        <div style={styles.navbar}>
            <a style={styles.links}>Link 1</a>
            <a style={styles.links}>Link 2</a>
            <a>Link 3</a>
        </div>
    );
}

export default Navigation;