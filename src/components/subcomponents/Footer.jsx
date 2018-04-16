import React, {Component} from 'react';
import {Segment, Grid, Icon} from "semantic-ui-react";
import PropTypes from 'prop-types';

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <Segment>
                    <Grid>
                        <Grid.Column width={6} textAlign='left'>
                            Copyright 20!8
                        <p>Bee</p>
                        </Grid.Column>

                        <Grid.Column width={4} textAlign='center'>
                            <Icon name='rocket' size='large' color='purple'/>
                        </Grid.Column>

                        <Grid.Column width={6} textAlign='right'>
                            Design by apple in california
                        </Grid.Column>
                    </Grid>
                </Segment>
            </div>
        );
    }
}

Footer.propTypes = {};

export default Footer;
