import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

const DeploymentResults = ({results}) => (
    <div className="well deployment-results">
      {
        results.map((result, idx) => {
          return(
            <p key={ result.contract }>
              <span>{ result.contract }</span><br />
              <span> Contract Address: { result.address }</span><br />
              <span> Transaction Hash: { result.transactionHash }</span><br />
              <span> ABI:
                <p><code>
                  { JSON.stringify(result.ABI) }
                </code></p>
              </span>
            </p>
          )
        })
      }
    </div>
);

export default DeploymentResults;
