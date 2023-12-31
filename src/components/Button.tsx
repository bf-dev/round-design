import React from 'react'
import styled from 'styled-components'

import { firstTruthy } from '../utils/priority'

const StyledButton = styled.button`
  background-color: ${firstTruthy('red', 'green', 'blue')};
`
export const Button: React.FC<{ children: React.ReactNode }> = ({
  children
}) => <StyledButton>{children}</StyledButton>
