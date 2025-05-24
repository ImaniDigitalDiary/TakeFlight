import React from 'react'

// FONT AWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

function SearchLinksFooter() {
  return (
    <div>
      <div className='searchTopicsLinksMainFooter'>
              <div>
                  <ul className='searchlinksFooter'>
                      <li><FontAwesomeIcon icon={faChevronDown} /> About Take Flight</li>
                      <li><FontAwesomeIcon icon={faChevronDown} /> Products and services</li>
                      <li><FontAwesomeIcon icon={faChevronDown} /> Popular destinations</li>
                      <li><FontAwesomeIcon icon={faChevronDown} /> Careers</li>
                  </ul>
              </div>
              <div className='impNoticeDiv'>
                  <FontAwesomeIcon icon={faCircleInfo} className='faCircleInfo' /> Important notices
              </div>
          </div>
    </div>
  )
}

export default SearchLinksFooter
