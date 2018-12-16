import React from 'react'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import {Creators as FormActions} from '../store/actions/form'

const ListItemFooter = props => (
  <div className='list-card-footer'>
      <div className='list-card-footer-actions'>
        <FontAwesomeIcon
          onClick={() => props.startUpdate(props.item, props.list)} 
          icon={faPen}
          color='#E91e63'
          size='1x'
        >
        </FontAwesomeIcon>
        <FontAwesomeIcon 
          icon={faTrash}
          onClick={() => props.deleteProduct(props.item.id)}
          color='#00b0FF'
          size='1x'
        />
      </div>
      <p>Total R${props.item.total}</p>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators(FormActions, dispatch)

export default connect(null, mapDispatchToProps)(ListItemFooter)