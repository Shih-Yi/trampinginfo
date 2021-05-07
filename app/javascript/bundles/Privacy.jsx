import React from 'react';
import { Container, Header } from 'semantic-ui-react'

const Privacy = () => {

  return(
    <Container text id="privacy-policy">
      <Header as='h2'>Privacy Policy</Header>
        <p>Last updated: 05/2021</p>

        <p>
          My Company (change this) ("us", "we", or "our") operates http://www.mysite.com (change this) (the "Site"). This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site.

          We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.

          Information Collection And Use

          While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name ("Personal Information").

        </p>

        <p>
          Log Data

          Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data").

          This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.

          In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this …
        </p>

    </Container>
  );
};

export default Privacy;
