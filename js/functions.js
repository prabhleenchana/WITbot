function doesNeedHelp(message){
    switch (message) {
        case 'help':
            return true;
            break;
        case 'help?':
            return true;
            break;
        case 'can you help me?':
            return true;
            break;
        default:
            return false;
    }
}