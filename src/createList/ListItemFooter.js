import React from 'react'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ListItemFooter = () => (
  <div className='list-card-footer'>
      <div className='list-card-footer-actions'>
        <FontAwesomeIcon 
          icon={faPen}
          color='#E91e63'
          size='1x'
        >
        </FontAwesomeIcon>
        <FontAwesomeIcon 
          icon={faTrash}
          color='#00b0FF'
          size='1x'
        />
      </div>
      <p>Total: R$ 130.00</p>
  </div>
)

export default ListItemFooter