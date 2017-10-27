import * as React from 'react';

export interface Props {

}

export const Logos: React.StatelessComponent<Props> = (props) => {
    const styles = {
        container: {
            zIndex: 10,
            position: 'absolute',
            opacity: 0.75,
            right: 10,
            bottom: 10,
            padding: 10,
            height: 200,
        },
        logo: {
            height: '100%',
            objectFit: 'contain',
        }
    }

    return (
        <div style={styles.container}>
            <img style={styles.logo} src="../assets/images/travven-logo.png" />
            <img style={styles.logo} src="../assets/images/6mas-logo.png" />
        </div>
    );
};

export default Logos;