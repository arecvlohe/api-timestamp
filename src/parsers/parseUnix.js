import moment from 'moment';

export default function(obj) {
  const time = moment(obj.query.iso);
  const valid = time.isValid();
  const unix = time.valueOf();

  if (!valid)
    return { error:'Invalid ISO-format' };

  return {
    unix: unix,
  };
}
