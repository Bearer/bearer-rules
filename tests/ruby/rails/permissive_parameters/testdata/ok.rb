params.permit(:name)
params.slice(:name).permit!

ActionController::Parameters.permit_all_parameters = false
