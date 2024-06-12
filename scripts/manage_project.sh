#!/bin/bash
# @Author: Ramiro Luiz Nunes
# @Date:   2024-06-09 18:18:24
# @Last Modified by:   Ramiro Luiz Nunes
# @Last Modified time: 2024-06-09 20:26:37

# Import the functions from utils.sh
source scripts/utils.sh

# Print a colorful header
echo -e "${GREEN}================================================================================${NC}"
echo -e "${CYAN}                           PAC-MAN Website Front-End                            ${NC}"
echo -e "${GREEN}================================================================================${NC}"

# Function to get and save the project root path
get_project_root_path() {
    read -p "Enter the root path of the project: " PROJECT_ROOT
    PROJECT_ROOT=$(realpath "$PROJECT_ROOT")
    echo "Selected project root path: $PROJECT_ROOT"
    read -p "Do you want to save this path for future use? (y/n): " save_path
    if [ "$save_path" == "y" ]; then
        echo "$PROJECT_ROOT" > ~/.project_root_path
        echo "Path saved."
    else
        echo "Path not saved."
    fi
}

# Function to get and save the submodule name
get_submodule_name() {
    read -p "Enter the submodule name: " SUBMODULE_NAME
    echo "Selected submodule name: $SUBMODULE_NAME"
    read -p "Do you want to save this submodule name for future use? (y/n): " save_name
    if [ "$save_name" == "y" ]; then
        echo "$SUBMODULE_NAME" > ~/.submodule_name
        echo "Submodule name saved."
    else
        echo "Submodule name not saved."
    fi
}

# Check if root path is provided as an argument
if [ -z "$1" ]; then
    # If no argument is provided, check for saved root path
    if [ -f ~/.project_root_path ]; then
        PROJECT_ROOT=$(cat ~/.project_root_path)
    else
        get_project_root_path
    fi
else
    PROJECT_ROOT=$(realpath "$1")
    echo "$PROJECT_ROOT" > ~/.project_root_path
fi

# Verify if the provided root path exists
if [ ! -d "$PROJECT_ROOT" ]; then
    echo -e "${RED}The provided root path does not exist.${NC}"
    get_project_root_path
fi

# Check if submodule name is saved
if [ -f ~/.submodule_name ]; then
    SUBMODULE_NAME=$(cat ~/.submodule_name)
else
    get_submodule_name
fi

# Verify if the submodule exists
SUBMODULE_PATH="$PROJECT_ROOT/modules/$SUBMODULE_NAME"
if [ ! -d "$SUBMODULE_PATH" ]; then
    echo -e "${RED}The specified submodule does not exist at $SUBMODULE_PATH.${NC}"
    get_submodule_name
fi

# Execute the main.sh script from the submodule
SUBMODULE_MAIN_SCRIPT="$PROJECT_ROOT/modules/scripts-core/src/main.sh"
if [ ! -f "$SUBMODULE_MAIN_SCRIPT" ]; then
    echo -e "${RED}The main.sh script does not exist in the submodule.${NC}"
    exit 1
fi

echo -e "${CYAN}Executing the main.sh script from the submodule...${NC}"
bash "$SUBMODULE_MAIN_SCRIPT" "$PROJECT_ROOT"
