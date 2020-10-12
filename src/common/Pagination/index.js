import React from 'react';
import Button from "./Button";
import Icon from "./Icon";
import { Footer, Paragraph, PageText, PageCounter } from './styled';

const Pagination = () => {
  return (
    <Footer>
      <Button
        previous
        buttonText="First"
        disabled={true}
        body={
          <>
            <Icon
              mobile
              previous
              disabled={true}
              alt="back to first page symbol"
            />
            <Icon
              previous
              disabled={true}
              alt="back to previous page symbol"
            />
          </>}
      />
      <Button
        previous
        buttonText="Previous"
        disabled={true}
        body={
          <>
            <Icon
              previous
              disabled={true}
              alt="back to first page symbol"
            />
          </>}
      />
      <Paragraph>
        <PageText>
          Page
        </PageText>
        <PageCounter>
          1
        </PageCounter>
        <PageText>
          of
        </PageText>
        <PageCounter>
          500
        </PageCounter>
      </Paragraph>
      <Button
        buttonText="Next"
        disabled={false}
        body={
          <>
            <Icon
              disabled={false}
              alt="move to next page symbol"
            />
          </>}
      />
      <Button
        buttonText="Last"
        disabled={false}
        body={
          <>
            <Icon
              disabled={false}
              alt="move to last page symbol"
            />
            <Icon
              mobile
              disabled={false}
              alt="move to last page symbol"
            />
          </>}
      />
    </Footer>
  )
}

export default Pagination;