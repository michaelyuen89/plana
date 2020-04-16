class Api::ProjectsController < ApplicationController
    skip_before_action :verify_authenticity_token
    before_action :ensure_logged_in, only: [:index, :show, :create, :update, :destroy]

    def index
        @projects = Project.all
        render :index
    end

    def show
        @project = Project.find(params[:id])
        render :show
    end

    def create
        # debugger
        @project = Project.new(project_params)
        @project.team_id = 1
        @project.user_id = current_user.id
        # @project = Project.new(name: 'test', description: 'testdes', user_id: 33, team_id: 1)
        
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
        if  @project
            @project.destroy
            render :show
        else
            render json: ["Can't delete this project"], status: 422
        end

    end

    private

    def project_params
        params.require(:project).permit(:name, :description)
    end


end
