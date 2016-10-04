import React, {PropTypes} from 'react'

ReusableComponent.propTypes = {
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
}

//making a prop mandatory
ReusableComponent.propTypes = {
  requiredArray: PropTypes.array.isRequired,
}
