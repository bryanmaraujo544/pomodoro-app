import { AnimateSharedLayout, motion } from 'framer-motion';
import React from 'react';
import { Container } from './styles';

interface Props {
  hasStarted: boolean,
  setHasStarted: any,
  isInBreak: boolean,
  setIsInBreak: any,
}

export const Selector = ({
  hasStarted,
  setHasStarted,
  isInBreak,
  setIsInBreak
}: Props) => {

  function handleChangeToTaskState() {
    if (isInBreak && !hasStarted){
      setIsInBreak(false);
    }
  }

  function handleChangeToBreakState() {
    if (!isInBreak && !hasStarted){
      setIsInBreak(true);
    }
  }
  return (
    <AnimateSharedLayout>
      <Container
        hasStarted={hasStarted}
        isInBreak={isInBreak}
        as={motion.div}
      >
        <motion.div 
          className="task"
          onClick={() => handleChangeToTaskState()}
          animate={{
            color: !isInBreak ? '#F1F6FE' : '#083172',
          }}
        > 
          {/* This is the background div */}
          {!isInBreak && ( 
            <motion.div 
              className="button-bg"
              animate={{
                background: (!isInBreak ? 'linear-gradient(to right, #0D5CD3, #083172)' : 'transparent'),
              }}
              layoutId="a"
            >
            </motion.div>
          )}
          <p>Task</p>
        </motion.div>
        <motion.div 
          className="break"
          onClick={() => handleChangeToBreakState()}
          animate={{
            color: isInBreak ? '#F1F6FE' : '#083172',
          }}
        >
          {/* This is the break background div */}
          {isInBreak && (
            <motion.div 
              className="button-bg"
              animate={{
                background: (isInBreak ? 'linear-gradient(to right, #70E000, #BEF566)' : 'transparent'),
              }}
              layoutId="a"
            >
            </motion.div>
          )}
          <p>Break</p>
        </motion.div>
      </Container>

    </AnimateSharedLayout>
  )
}