#!/usr/bin/env node

const

    // Libraries
    util = require('./../util.js'),
    _ = require('lodash');

return util.getCommitMessage()
  .then((commitMsg) => {
      // Remove multiple spaces and spaces surrounding message
      const sanitizedCommitMsg = _(commitMsg)
          .replace(/  +/g, ' ')
          .trim();

      return util.writeCommitMessage(sanitizedCommitMsg);
  });
