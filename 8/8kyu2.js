function enough(cap, on, wait) {
    const availibleSits = cap - on;
    
    if (availibleSits >= wait) {
        return 0;
    }

    return wait - availibleSits
  }
