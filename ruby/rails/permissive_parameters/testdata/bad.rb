params.permit!
params.merge(other).permit!

ActionController::Parameters.permit_all_parameters = true
