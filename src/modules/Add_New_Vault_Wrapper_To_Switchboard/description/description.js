import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';

export const name = 'Adding a new vault wrapper to the switchboard';

export const description =
    'When you want to link a forwarder to receive a specified type of fungible token through your switchboard.';

export const category = 'Fungible Token';

export const icon = (
    <FontAwesomeIcon icon={faUserEdit} color="white" size="lg" />
);

export const bgColor = '#f4a460';

export const script = false;
