class Api::ProjectsController < ApplicationController
    
    before_action :ensure_logged_in, only: [:index, :show, :create, :update, :destroy]

    def index
        @projects = Project.all
    end

    def show
        @project = Project.find(params[:id])
    end

    def create
        @project = Project.new(project_params)

        if @project.save
            render :show
        else
            render json: @project.errors.full_messages, status: 422
        end
    end

    def update
        @project = Project.find(params[:id])

        if @project.update(project_params)
            render :show
        else
            render json: @project.errors.full_messages, status: 422
        end

    end

    def destroy
        @project = Project.find(params[:id])

        if @project.destroy
            render :index
        else
            render json: ["Can't delete this project"], status: 422
        end

    end

    private

    def project_params
        params.require(:project).permit(:name, :description)
    end


end
