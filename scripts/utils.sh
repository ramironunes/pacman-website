#!/bin/bash
# @Author: Ramiro Luiz Nunes
# @Date:   2024-06-09 18:18:48
# @Last Modified by:   Ramiro Luiz Nunes
# @Last Modified time: 2024-06-09 20:24:21

# Utility functions

# Define some ANSI color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
ORANGE='\033[0;33m'
NC='\033[0m' # No Color

# Function to check if a command exists
command_exists () {
    type "$1" &> /dev/null ;
}

# Function to print a separator
print_separator() {
  echo -e "${BLUE}--------------------------------------------------------------------------------${NC}"
}
